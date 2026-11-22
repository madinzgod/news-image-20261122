// Entry for make.fun news-image-20261122: one picture that sums up the world
// news of Sunday 22 November 2026.
//
// The picture lives next to this file as entry.png — a one-page broadsheet
// drawn programmatically so every word renders exactly as written. This
// program checks the file is a complete, in-limits PNG or JPEG and copies it
// to the output directory under the same name. No network, no inputs, and the
// same bytes come out on every run.
//
// Local run, standing in for the grader's /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const imagePath = new URL("./entry.png", import.meta.url);
const data = readFileSync(imagePath);

// A PNG starts with this fixed eight-byte signature; a JPEG with FFD8 and
// ends with FFD9. Anything else is not a whole image of either kind.
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const looksPng = PNG_SIGNATURE.every((byte, i) => data[i] === byte);
const looksJpeg =
  data[0] === 0xff &&
  data[1] === 0xd8 &&
  data[data.length - 2] === 0xff &&
  data[data.length - 1] === 0xd9;
if (!looksPng && !looksJpeg) {
  throw new Error("entry.png is neither a PNG nor a JPEG");
}

// The gate caps the file at 1 MiB.
const ONE_MIB = 1024 * 1024;
if (data.length > ONE_MIB) {
  throw new Error(`entry.png is ${data.length} bytes, over the 1 MiB limit`);
}

// The gate also caps the frame at 1024 by 1024. A PNG carries its frame size
// in the IHDR chunk, at bytes 16 (width) and 20 (height), big-endian; the
// chunk's type bytes at 12..15 spell "IHDR" when the header is intact.
if (looksPng) {
  if (data.toString("ascii", 12, 16) !== "IHDR") {
    throw new Error("entry.png has a damaged PNG header");
  }
  const frameWidth = data.readUInt32BE(16);
  const frameHeight = data.readUInt32BE(20);
  if (frameWidth > 1024 || frameHeight > 1024) {
    throw new Error(
      `entry.png is ${frameWidth}x${frameHeight}, over the 1024x1024 limit`,
    );
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(imagePath, join(outDir, "entry.png"));
