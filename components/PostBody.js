import Image from "next/image";
import { PortableText } from "@portabletext/react";

const portableTextComponents = {
  types: {
    image: ({ value }) => value?.asset?.url ? (
      <figure className="post-body-image">
        <Image src={value.asset.url} alt={value.alt || ""} width={1200} height={800} sizes="(max-width: 900px) 100vw, 760px" />
      </figure>
    ) : null,
  },
  marks: {
    link: ({ children, value }) => {
      const external = value?.href?.startsWith("http");
      return <a href={value?.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>;
    },
  },
};

export default function PostBody({ body }) {
  if (!body?.length) return null;
  if (typeof body[0] === "string") return body.map((text, index) => <p key={index}>{text}</p>);
  return <PortableText value={body} components={portableTextComponents} />;
}
