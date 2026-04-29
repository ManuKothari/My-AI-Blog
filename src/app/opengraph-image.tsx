import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Manu Kothari — ML Engineer & RAG Specialist";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            marginTop: 32,
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          Manu Kothari
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            opacity: 0.85,
            maxWidth: 900,
          }}
        >
          Notes on shipping production AI: RAG, multimodal models, and LLM systems.
        </div>
      </div>
    ),
    size,
  );
}
