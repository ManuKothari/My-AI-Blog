import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      ["remark-frontmatter", ["yaml"]],
      ["remark-mdx-frontmatter", {}],
      ["remark-gfm", {}],
    ],
    rehypePlugins: [
      ["rehype-slug", {}],
      ["rehype-autolink-headings", { behavior: "wrap" }],
      [
        "rehype-pretty-code",
        {
          theme: { dark: "github-dark", light: "github-light" },
          keepBackground: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
