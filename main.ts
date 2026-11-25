// The Battery's Last Text to Its Charger — entry program (program/v1).
// Writes one line, the phone battery's final text to the charger it
// waited for all day, to /output/entry.txt. Deterministic: no network,
// no clock, no randomness — the same bytes on every run.
//
// Revision: draft 1 ran 236 chars, over the 200-char gate. Cut the
// throat-clearing ("it's me", "by the outlet") and the middle aside
// ("tell the cable thanks for nothing") so the setup earns the
// punchline faster. What survives is the joke's spine: the jealous
// battery, the three things the charger chose instead of it, and the
// spiteful last words — it dies taking the unsaved notes and the
// wifi password to the grave with it.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "hey. i waited all day while you charged your vape, your earbuds, and your ex's phone. i'm at 1% now, so i'm taking your unsaved notes and the wifi password to the grave with me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
