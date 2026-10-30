"use client";

import { ArrowUpRight, FilePdf, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const reports = [
  {
    id: "impact-report-2025",
    title: "2025 Impact Report",
    filename: "CHC_Impact_Report_2025.pdf",
    leadDestination: "mailchimp",
    description:
      "Program outcomes and the difference whole-family support is making for women, youth, and children in Uganda.",
  },
  {
    id: "annual-report-2025",
    title: "2025 Annual Report",
    filename: "CHC_Annual_Report_2025.pdf",
    leadDestination: "mailchimp",
    description:
      "A transparent account of our work, stewardship, organizational progress, and results during 2025.",
  },
  {
    id: "gifts-of-securities-form",
    title: "Gifts of Securities Form",
    filename: "CHC_Gifts_of_Securities_Form.pdf",
    description:
      "A fillable form for donors who wish to support Christ’s Hands Centre with a gift of appreciated securities.",
  },
];

export default function ImpactReports() {
  const [selected, setSelected] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (!selected) return undefined;
    nameInputRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && !submitting) setSelected(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selected, submitting]);

  async function downloadReport(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/report-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          reportId: selected.id,
          website: data.get("website"),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(
          payload.error || "We couldn’t prepare your download. Please try again."
        );
      }

      const pdf = await response.blob();
      const url = URL.createObjectURL(pdf);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = selected.filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
      form.reset();
      setSelected(null);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section sand report-section">
      <div className="wrap">
        <div className="section-lead">
          <h2>Impact and annual reports</h2>
          <p>
            We publish reports to share our progress, document our stewardship
            of donor funds, and remain accountable to the communities and
            partners we serve.
          </p>
        </div>
        <div className="report-grid">
          {reports.map((report) => (
            <article className="report-card" key={report.id}>
              <span className="report-icon">
                <FilePdf size={30} weight="duotone" />
              </span>
              <p className="eyebrow">PDF DOWNLOAD</p>
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <button
                className="button brand"
                type="button"
                onClick={() => {
                  setError("");
                  setSelected(report);
                }}
              >
                DOWNLOAD REPORT <ArrowUpRight size={14} weight="bold" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="report-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !submitting) {
              setSelected(null);
            }
          }}
        >
          <div
            className="report-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="report-modal-title"
          >
            <button
              className="report-modal-close"
              type="button"
              aria-label="Close"
              disabled={submitting}
              onClick={() => setSelected(null)}
            >
              <X size={24} />
            </button>
            <span className="report-icon">
              <FilePdf size={30} weight="duotone" />
            </span>
            <h2 id="report-modal-title">Download {selected.title}</h2>
            <p>
              Enter your name and email address. Your report will begin
              downloading immediately after submission.
            </p>
            <form onSubmit={downloadReport}>
              <label>
                First name
                <input
                  ref={nameInputRef}
                  name="firstName"
                  required
                  minLength={2}
                  maxLength={60}
                  autoComplete="given-name"
                />
              </label>
              <label>
                Last name
                <input
                  name="lastName"
                  required
                  minLength={2}
                  maxLength={60}
                  autoComplete="family-name"
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                />
              </label>
              <label className="report-honeypot" aria-hidden="true">
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
              {error && (
                <p className="report-form-error" role="alert">
                  {error}
                </p>
              )}
              <button className="button brand" type="submit" disabled={submitting}>
                {submitting ? "PREPARING DOWNLOAD…" : "DOWNLOAD NOW"}
                {!submitting && <ArrowUpRight size={14} weight="bold" />}
              </button>
              <p className="report-privacy-note">
                {selected.leadDestination === "mailchimp"
                  ? "Your details are submitted securely to Christ’s Hands Centre’s Mailchimp audience and will not be displayed publicly."
                  : "We use these details only to record report interest and will not display them publicly."}
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
