import { expect, test } from "@playwright/test";

const slugs = ["the-factory", "vantage", "showcard", "chromatique"];

for (const slug of slugs) {
  test(`/work/${slug} loads with a heading, sections and a way back`, async ({ page }) => {
    const response = await page.goto(`/work/${slug}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveCount(1);
    expect(await page.locator("section.section").count()).toBeGreaterThan(0);
    await expect(page.getByRole("link", { name: /Back to all work/ })).toHaveAttribute("href", "/#works-section");
  });
}

test("an unknown case study is a 404", async ({ page }) => {
  const response = await page.goto("/work/not-a-project");
  expect(response?.status()).toBe(404);
});

test("case study links open in a new tab with safe rel", async ({ page }) => {
  await page.goto("/work/the-factory");
  const external = page.locator(".links a");
  const count = await external.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    await expect(external.nth(i)).toHaveAttribute("target", "_blank");
    await expect(external.nth(i)).toHaveAttribute("rel", /noopener/);
  }
});

test("/lab/09labs loads with a heading and a way back to Labs", async ({ page }) => {
  const response = await page.goto("/lab/09labs");
  expect(response?.status()).toBe(200);
  await expect(page.locator("main h1")).toHaveCount(1);
  await expect(page.getByRole("link", { name: /Back to Labs/ })).toHaveAttribute("href", "/#labs-section");
});
