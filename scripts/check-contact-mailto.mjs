import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contactPath = path.resolve(__dirname, "../src/components/Contact.tsx");

const contactSource = await fs.readFile(contactPath, "utf8");

const mailtoInsideTimeout =
  /setTimeout\s*\(\s*\(\s*\)\s*=>\s*\{\s*const\s+mailtoLink\s*=\s*`mailto:/m;

assert.equal(
  mailtoInsideTimeout.test(contactSource),
  false,
  "Contact.tsx: mailto link open happens inside setTimeout; browsers commonly block this because it isn't a direct user gesture.",
);

console.log("OK: Contact mailto open is not delayed by setTimeout.");

