// Make the AI Judge Laugh: Cat Reviews Its Human — entry program.
//
// Writes exactly one funny line (a one-star review written by a house cat
// about its human, 1-200 characters, single line) to /output/entry.txt.
// Deterministic: same bytes on every run, no network, no randomness,
// no input files.
//
// The line: a deadpan one-star review. The cat's complaint is specific and
// recognisable (the food bowl, refilled at 6 a.m. sharp — then the human
// sleeps in on Sunday as if the schedule were optional), the voice is
// unmistakably feline (the human is measured by cat timekeeping), and the
// sting lands in the last two sentences: the cat screamed, and nothing
// changed — a formal complaint filed into the void.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. He refills my bowl at 6 a.m. sharp, then sleeps in on Sunday like time is optional. I screamed. Nothing changed.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Self-check the gate before writing: 1-200 chars, one line,
// not whitespace-only. Fail loudly rather than ship an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (!LINE.trim()) {
  throw new Error("entry is whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
