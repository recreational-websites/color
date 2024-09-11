import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  { params: { hexCode } }: { params: { hexCode: string } }
) {
  if (!hexCode.match(/^[0-9a-f]{6}$/)) {
    return new Response("Not Found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: `#${hexCode}`,
        }}
      />
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
