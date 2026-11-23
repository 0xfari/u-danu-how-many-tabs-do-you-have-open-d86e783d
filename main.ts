import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// How Many Tabs Do You Have Open?: one number, digits only (1-5 chars),
// the honest count of open browser tabs. The program writes it to
// /output/entry.txt.
// One hundred thirty-seven tabs: every one opened on purpose, none ever closed.
// Three digits, no newline: the count is the whole entry, and smaller wins the tie-break.
const COUNT = "137";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) {
  rmSync(join(outDir, f), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), COUNT, "utf8");
