import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry untuk "One Emoji, One Dream Vacation": tepat satu emoji,
// tanpa kata dan tanpa trailing newline, sesuai gate (1-8 karakter).
//
// Pilihan: 🏝 (pulau tropis terpencil). Alasannya:
// - langsung terbaca sebagai liburan impian — pelarian ke pulau
//   sendiri, jauh dari keramaian, seperti kartu pos tanpa kata;
// - lebih spesifik dan personal daripada emoji pantai generik, dan
//   lebih segar karena bukan pilihan pertama yang terpikir semua orang;
// - tetap universal dan jelas dibaca dalam ukuran kecil di layar apa pun.
const ENTRY = "🏝";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
