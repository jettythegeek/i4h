import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ message: "Missing SANITY_REVALIDATE_SECRET" }, { status: 500 });

  try {
    const { isValidSignature, body } = await parseBody(request, secret, true);
    if (!isValidSignature) return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    if (body?._type !== "post") return NextResponse.json({ message: "Ignored document type" });

    revalidateTag("post", "max");
    if (body.slug) revalidateTag(`post:${body.slug}`, "max");
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json({ message: error instanceof Error ? error.message : "Unable to revalidate" }, { status: 500 });
  }
}
