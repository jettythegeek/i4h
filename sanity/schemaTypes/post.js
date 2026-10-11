import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: rule => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: rule => rule.required().custom(value => !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) || "Use lowercase letters, numbers, and hyphens only (for example: hello-world)."),
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: rule => rule.required().max(240) }),
    defineField({
      name: "mainImage",
      title: "Featured image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alternative text", type: "string", validation: rule => rule.required() })],
      validation: rule => rule.required(),
    }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime", initialValue: () => new Date().toISOString(), validation: rule => rule.required() }),
    defineField({ name: "author", title: "Author", type: "string", initialValue: "Admin" }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alternative text", type: "string", validation: rule => rule.required() })],
        }),
      ],
      validation: rule => rule.required(),
    }),
  ],
  orderings: [{ title: "Publish date, newest", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "mainImage" },
  },
});
