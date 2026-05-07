import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#3B2A20",
          color: "#F4EFE8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 130,
          letterSpacing: -2,
          paddingBottom: 14,
        }}
      >
        V
      </div>
    ),
    { ...size },
  );
}
