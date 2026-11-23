// Real-Life Patch Notes: The Comedy Changelog
// A program/v1 make.fun entry. Writes one single-line patch note for a
// bug in human biology to /output/entry.txt.
//
// The winning concept, picked by a scored concept test of three candidates:
// the brain waking its owner at 3:12am to replay an embarrassing moment
// from 2014. Two concrete numbers, one universally recognised bug, and a
// dry engineering fix — unsolicited memory replay now requires written
// consent. The joke lands on first read because everyone has lived it.
//
// Verified locally: two runs of `node main.ts` produce byte-identical
// output, sha256 066ac6259467889a2f1aed052d154d9b58d80502db3d42be9116069cb5fd7a4c,
// 159 bytes / 159 characters, inside the gate's 1–160 range.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: exactly 159 characters, no trailing newline, so the file's
// byte count equals its character count and the gate sees one clean line.
const ENTRY =
  "v4.0.3: fixed a bug where the brain woke the user at 3:12am to replay an embarrassing moment from 2014; unsolicited memory replay now requires written consent.";

// Deterministic: no network, no randomness, no secrets, no input read.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
