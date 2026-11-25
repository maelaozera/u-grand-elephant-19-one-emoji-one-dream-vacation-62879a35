// One Emoji, One Dream Vacation — make.fun entry.
//
// Writes exactly one emoji to entry.txt in the output directory
// (MAKEFUN_OUTPUT_DIR when set, /output otherwise), with no words
// and no trailing newline.
//
// The pick is a desert island: a remote tropical island, the
// postcard version of getting away from everything — specific
// enough to feel like one dream trip, plain enough to read at
// any size on any screen.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one emoji, inside the 1-8 character gate.
const dreamEmoji = "🏝";

function main(): void {
  const emoji = dreamEmoji;
  if ([...emoji].length < 1 || [...emoji].length > 8) {
    throw new Error("Entry must be 1-8 characters.");
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), emoji, "utf8");
}

main();
