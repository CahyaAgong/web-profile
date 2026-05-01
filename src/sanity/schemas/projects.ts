import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects Section",
  type: "document",
  fields: [
    defineField({
      name: "viewAllLink",
      title: "View All Projects Link",
      type: "url",
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
            { name: "tech", type: "array", of: [{ type: "string" }], title: "Tech Stack" },
            { name: "github", type: "url", title: "GitHub Link" },
            { name: "demo", type: "url", title: "Demo Link" },
          ],
        },
      ],
    }),
  ],
});
