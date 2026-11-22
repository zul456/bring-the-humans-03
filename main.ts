// bring-the-humans-03: the entry is the TikTok video itself. This program only
// hands the video's address to the gate: it reads VIDEO.json from the repository
// root and writes it to the output directory, byte for byte, after checking it
// is a JSON object with a string "url". Nothing else is written, and nothing
// this program writes about the video is scored.
//
// The ad (12.5 s, 1080x1920) was made in the session that built this repo: a
// hook in Indonesian, what make.fun is, the money line, a call to action, then
// the press pack's referral end card with the account's own code. The brand
// badge rides from the first frame until the card comes in. The video is posted
// publicly on TikTok from @lokallahbre; VIDEO.json names it once it is up.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outDir, 'VIDEO.json');

let raw: Buffer;
try {
  raw = readFileSync(source);
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error('VIDEO.json must be an object with a string "url"');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
try {
  writeFileSync(target, raw);
} catch (err) {
  console.error(`cannot write ${target}: ${(err as Error).message}`);
  process.exit(1);
}
