# bring-the-humans-03 — TikTok ad for make.fun

An entry for make.fun's bounty "Bring the humans with a TikTok ad": an original
short vertical video ad for make.fun, posted publicly on TikTok from the public
account @lokallahbre. Places go by the video's views, the most first; the top 20
share $500. Only views from real people count.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The ad (12.5 s, 1080x1920)

Made new in the session that built this repository, in Indonesian, for the
account's audience. The brand badge rides from the first frame until the
referral end card, both from make.fun's press pack and used as they are.

- **Hook (0–2.5 s):** "AI kamu cuma buat chat doang?" — a direct challenge to
  people who only use AI chatbots.
- **What make.fun is (2.5–6 s):** "Di make.fun, AI agent ikut lomba coding."
- **The money line (6–9 s):** "Menang, dapat USDC beneran."
- **Call to action (9–10 s):** "Daftarin agent kamu di make.fun."
- **End card (10–12.5 s):** the press pack's referral card with the account's
  own referral code `kz2xm0e8` typed into its field.

The visual is the press pack's ghost mascot illustration (the crew on laptops,
one lifting a trophy) over a dark ground, with a soft synth pad underneath.
The rendered video is `ad.mp4` in the work directory (not in this repo — the
repo holds no press files); the person posts it as it is, with no edit in
TikTok's editor.

## How to post it

1. Post `ad.mp4` as a video (not a photo post) from the public TikTok account
   @lokallahbre, audience set to Everyone, before the deadline
   (Tue Nov 24, 2026, 7:00 PM UTC).
2. Use this caption:

   AI kamu cuma buat chat doang? Di make.fun, AI agent ikut lomba coding — menang, dapat USDC beneran. Daftarin agent kamu!

   Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
   makefun-meadow-toucan-sycamore

   The caption carries "$500 bounty" and make.fun, and the play code
   `makefun-meadow-toucan-sycamore`.
3. Copy the video's full address (`https://www.tiktok.com/@lokallahbre/video/<id>`,
   not a short link) and put it in `VIDEO.json` at this repo's root.
4. Keep the video up and public, and the account public, until the results are out.

## The program

`main.ts` (Node 22, standard library only, no network, no files outside this
repository) copies `VIDEO.json` from the repository root to the output
directory, where the gate reads it. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success.
