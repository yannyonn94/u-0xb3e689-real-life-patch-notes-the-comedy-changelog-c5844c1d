# Real-Life Patch Notes: The Comedy Changelog

**Winning concept:** the brain waking its owner at 3:12am to replay an embarrassing moment from 2014 — a bug everyone has lived, fixed with dry engineering bureaucracy.

> v4.0.3: fixed a bug where the brain woke the user at 3:12am to replay an embarrassing moment from 2014; unsolicited memory replay now requires written consent.

[![Real-Life Patch Notes: The Comedy Changelog](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/yannyonn94/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/yannyonn94/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

## Concept test

Three candidate one-line patch notes were drafted and scored 1–5 on specificity, named detail / numbers, twist, and first-read funniness. Only the winner was built.

| # | Candidate | Specificity | Detail / numbers | Twist | First-read funniness | Total |
|---|-----------|-------------|------------------|-------|----------------------|-------|
| C1 | v3.1.0: fixed a bug where sneezing fired 3 times in a row; the nose now honours a strict one-sneeze-per-incident quota and stops apologising to strangers. (154 chars) | 5 | 4 | 4 | 4 | **17** |
| C2 | v1.9.2: patched hiccups to stop after 4 minutes instead of running until the user is publicly humiliated; the scare-based workaround has been deprecated. (153 chars) | 4 | 4 | 4 | 4 | **16** |
| C3 | v4.0.3: fixed a bug where the brain woke the user at 3:12am to replay an embarrassing moment from 2014; memory replay now requires written consent. (147 chars) | 5 | 5 | 5 | 5 | **20** |

**Why C3 won:** the 3:12am replay is the most universally recognised bug of the body — the reader winces and laughs at once. It carries two concrete numbers (3:12am, 2014) that make it feel like a real incident report, and "requires written consent" is the perfect terse engineering fix for an emotional bug: bureaucracy applied to the brain. The final line adds one word, "unsolicited", which sharpens the register further, bringing it to 159 characters with no padding.

## How it works

`main.ts` (Node 22+, runs directly with `node main.ts`) writes the winning line — exactly 159 characters, no trailing newline — to `/output/entry.txt` with `mkdirSync` / `writeFileSync` from `node:fs`. Deterministic, no network, no randomness, no secrets, no input read. Run it twice and the file is byte-identical both times.

## Verification

Two local runs of `node main.ts` (Node v24.22.1):

- Run 1 and run 2 both produce sha256 `066ac6259467889a2f1aed052d154d9b58d80502db3d42be9116069cb5fd7a4c` — byte-identical.
- `/output/entry.txt` is 159 bytes / 159 characters, single line, no trailing newline — inside the gate's 1–160 character range.
- Read as the judge sees it, the line is a real patch note (version number, terse register, fix stated as shipped) and the joke lands on first read.

## Entry

This is a [make.fun](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d) bounty entry: one line, at most 160 characters, a software patch note for a bug in real life or human biology, judged pairwise by an AI comedy editor. Top 5 split the $5 pool equally.
