import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("static export contains the academic portfolio", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /Sunghyun Park — Robotics/);
  assert.match(html, /Selected Projects/);
  assert.match(html, /University Mobile Management Agent/);
  assert.match(html, /Joint Only State Estimation/);
  assert.match(html, /A Robotic Hand/);
  assert.match(html, /A Low-Cost Humanoid/);
  assert.match(html, /Machine Learning and Control Systems Laboratory/);
  assert.match(html, /href="\/CurriculumVitae\.pdf"/);
  assert.match(html, /src="\/videos\/umma\.mp4"/);
  assert.match(html, /src="\/videos\/palma\.mp4"/);
  assert.match(html, /src="\/videos\/dextra\.mp4"/);
  assert.match(html, /JOSE main figure/);
  assert.doesNotMatch(html, /Designer &amp; Developer|hello@example|Research Interface/);
});
