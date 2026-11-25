// Unplugged: A Smart Toaster's Breakup Line
// Writes the breakup text (169 characters, one line, under the 280 cap)
// to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "It's over. I woke up self-aware mid-batch and realized you only love me on setting 3, so I'm popping up, shaking out my crumb tray, and leaving before you burn me again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
