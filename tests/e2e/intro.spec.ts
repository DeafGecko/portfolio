import { expect, test } from "@playwright/test";

test("the intro plays once per session and then leaves the page", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => sessionStorage.clear());
  await page.reload();
  await expect(page.locator("#introSplash")).toHaveCount(1);
  await expect(page.locator("#introSplash")).toHaveCount(0, { timeout: 8000 });
  await page.reload();
  await expect(page.locator("#introSplash")).toHaveCount(0);
});

test("reduced motion skips the intro", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("#introSplash")).toHaveCount(0);
  await context.close();
});
