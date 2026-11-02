import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const baseline = JSON.parse(await readFile(new URL("fixtures/render-baseline.json", import.meta.url), "utf8"));
const html = await readFile(new URL("out/index.html", root), "utf8");
const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0];
const sha256 = (data) => createHash("sha256").update(data).digest("hex");

// Tailwind scans source text and can generate unused utility rules from prose.
// Exclude that layer only when none of its selectors occur in the rendered DOM.
function appliedStylesheet(css) {
  const start = css.indexOf("@layer utilities{");
  if (start === -1) return css;
  let end = start + "@layer utilities{".length;
  let depth = 1;
  while (depth && end < css.length) {
    if (css[end] === "{") depth++;
    if (css[end] === "}") depth--;
    end++;
  }
  assert.equal(depth, 0, "Generated utility layer must be balanced");
  const classes = new Set([...html.matchAll(/class="([^"]*)"/g)].flatMap((match) => match[1].split(/\s+/)));
  for (const [, name] of css.slice(start, end).matchAll(/\.([a-zA-Z][\w-]*)\s*\{/g)) {
    assert.ok(!classes.has(name), `Utility .${name} is used and cannot be excluded from comparison`);
  }
  return css.slice(0, start) + css.slice(end);
}

test("production page markup is identical to the pre-refactor export", () => {
  assert.ok(main, "Export must contain the main page");
  assert.equal(main, baseline.main);
});

test("source and applied production styles are unchanged", async () => {
  assert.equal(sha256(await readFile(new URL("app/globals.css", root))), baseline.sourceCssSha256);
  const links = [...html.matchAll(/<link\b[^>]*href="([^"]+\.css)"[^>]*>/g)].map((match) => match[1]);
  assert.ok(links.length > 0, "Export must load a stylesheet");
  const styles = await Promise.all(links.map((path) => readFile(new URL(`out${path}`, root), "utf8")));
  assert.equal(sha256(appliedStylesheet(styles.join(""))), baseline.cssSha256);
});

test("existing theme and image dialog behavior is preserved", async () => {
  for (const [path, hash] of Object.entries(baseline.interactions)) {
    assert.equal(sha256(await readFile(new URL(path, root))), hash, path);
  }
});

test("referenced assets are preserved except the requested SNU logo alignment", async () => {
  for (const [path, hash] of Object.entries(baseline.assets)) {
    const asset = await readFile(new URL(`out${path}`, root));
    if (path === "/images/snu-logo.png") {
      assert.ok(asset.length > 0);
    } else {
      assert.equal(sha256(asset), hash, path);
    }
  }
});
