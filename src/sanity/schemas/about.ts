import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "category", type: "string", title: "Category" },
            { name: "icon", type: "string", title: "Icon Name" },
            { name: "items", type: "array", of: [{ type: "string" }], title: "Skills" },
          ],
        },
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "Value" },
            { name: "label", type: "string", title: "Label" },
          ],
        },
      ],
    }),
  ],
});
