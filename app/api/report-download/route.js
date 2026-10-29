import { appendFile, readFile } from "node:fs/promises";
import path from "node:path";
import { get, put } from "@vercel/blob";

export const runtime = "nodejs";

const reports = {
  "impact-report-2025": {
    title: "2025 Impact Report",
    source: "chc-impact-report-2025.pdf",
    download: "CHC_Impact_Report_2025.pdf",
  },
  "annual-report-2025": {
    title: "2025 Annual Report",
    source: "chc-annual-report-2025.pdf",
    download: "CHC_Annual_Report_2025.pdf",
  },
  "gifts-of-securities-form": {
    title: "Gifts of Securities Form",
    source: "chc-gifts-of-securities-form.pdf",
    download: "CHC_Gifts_of_Securities_Form.pdf",
  },
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, maxLength) {
  return String(value || "")
    .replace(/[\r\n\t]+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function jsonError(error, status) {
  return Response.json(
    { error },
    { status, headers: { "Cache-Control": "no-store" } }
  );
}

async function appendToBlobLog(entry, token) {
  const pathname = "report-download-leads.txt";

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const current = await get(pathname, {
        access: "private",
        useCache: false,
        token,
      });
      const existing = current?.stream
        ? await new Response(current.stream).text()
        : "";
      await put(pathname, `${existing}${existing ? "\n" : ""}${entry}\n`, {
        access: "private",
        addRandomSuffix: false,
        allowOverwrite: Boolean(current),
        ...(current?.blob.etag ? { ifMatch: current.blob.etag } : {}),
        contentType: "text/plain; charset=utf-8",
        token,
      });
      return;
    } catch (error) {
      if (attempt === 2) throw error;
    }
  }
}

async function recordLead(entry) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (token) {
    await appendToBlobLog(entry, token);
    return;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("Report lead storage is not configured.");
  }

  const localLog = path.join(
    process.cwd(),
    "data",
    "report-download-leads.txt"
  );
  await appendFile(localLog, `${entry}\n`, "utf8");
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  if (clean(payload.website, 200)) {
    return jsonError("Invalid request.", 400);
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 254).toLowerCase();
  const report = reports[clean(payload.reportId, 80)];

  if (name.length < 2) return jsonError("Please enter your name.", 400);
  if (!emailPattern.test(email)) {
    return jsonError("Please enter a valid email address.", 400);
  }
  if (!report) return jsonError("That report is not available.", 404);

  const now = new Date();
  const localDateTime = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    dateStyle: "full",
    timeStyle: "long",
  }).format(now);
  const entry = [
    "--- REPORT DOWNLOAD ---",
    `Name: ${name}`,
    `Email: ${email}`,
    `Report: ${report.title}`,
    `Date and time (Africa/Lagos): ${localDateTime}`,
    `Timestamp (UTC): ${now.toISOString()}`,
  ].join("\n");
  try {
    await recordLead(entry);
  } catch (error) {
    console.error("Unable to record report download lead.", error);
    return jsonError(
      "The download service is temporarily unavailable. Please try again shortly.",
      503
    );
  }

  try {
    const pdfPath = path.join(process.cwd(), "assets", "reports", report.source);
    const pdf = await readFile(pdfPath);
    return new Response(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${report.download}"`,
        "Cache-Control": "private, no-store, max-age=0",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Unable to read requested report.", error);
    return jsonError("The report file could not be prepared.", 500);
  }
}
