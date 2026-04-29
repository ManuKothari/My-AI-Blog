import { ImageResponse } from "next/og";
import { getPostMeta } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Manu Kothari blog post";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = await getPostMeta(slug);
  const title = meta?.title ?? "Blog";
  const date = meta
    ? new Date(meta.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.6 }}>manukothari.dev</div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, opacity: 0.7 }}>
          {date ? `${date} · Manu Kothari` : "Manu Kothari"}
        </div>
      </div>
    ),
    size,
  );
}
