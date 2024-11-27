import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const width = 100;
  const height = 100;

  // Create canvas and context
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d")!;

  // Generate noise
  const imageData = ctx.createImageData(width, height);
  for (let i = 0; i < imageData.data.length; i += 4) {
    const value = Math.random() * 255;
    imageData.data[i] = value;
    imageData.data[i + 1] = value;
    imageData.data[i + 2] = value;
    imageData.data[i + 3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);

  // Convert to blob
  const blob = await canvas.convertToBlob();
  const arrayBuffer = await blob.arrayBuffer();

  // Return as PNG
  return new NextResponse(arrayBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
