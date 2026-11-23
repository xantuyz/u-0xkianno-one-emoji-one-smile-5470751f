// One Emoji, One Smile — make.fun entry (program/v1, Node 22).
// Writes exactly one emoji to /output/entry.txt: U+1F31E SUN WITH FACE.
//
// Why this emoji: a smiling sun is warm at first glance, universal across
// ages and cultures, chosen rather than the default smiley, and friendly
// without intimacy — a stranger's sunbeam, not a stranger's hug.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EMOJI = "\u{1F31E}"; // 🌞 SUN WITH FACE
const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, EMOJI, "utf8");

// Read back and refuse to pass silently if the file is not exactly the
// one emoji the gate expects (1–8 characters, not whitespace only).
const written = readFileSync(OUT_PATH, "utf8");
if (written !== EMOJI) {
  throw new Error(`expected exactly one emoji in ${OUT_PATH}`);
}
