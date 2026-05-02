import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "formPlaceholder",
      title: "Form Placeholder",
      type: "object",
      fields: [
        { name: "name", type: "string", title: "Name Placeholder" },
        { name: "email", type: "string", title: "Email Placeholder" },
        { name: "message", type: "string", title: "Message Placeholder" },
      ],
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "icon", type: "string", title: "Icon Name" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    }),
  ],
});
