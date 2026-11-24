import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I completed everything before the deadline, then spent the remaining six hours double-checking my work and un-completing it one improvement at a time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} outside gate 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is blank");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// The line is written exactly once, with no trailing newline,
// so the gate sees one line of 150 characters.
console.log(`wrote entry.txt (${LINE.length} chars)`);
