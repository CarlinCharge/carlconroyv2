import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { rehypeAutolinkHeadings } from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// @type {import('contentlayer/source-files').ComputedFields}

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Doc = defineDocumentType(() => {
  return {
    name: "Doc",
    filePathPattern: `app\garden\mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },

      published: {
        type: "boolean",
        default: true,
      },
    },
    computedFields,
  };
});

export default makeSource({
  contentDirPath: "app/garden/mdx",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          onVisitHighlightedLine(node) {
            if (node.children.length)
              node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
