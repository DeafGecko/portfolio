import { expect, test } from "@playwright/test";

test("header nav links point to sections that exist", async ({ page }) => {
  await page.goto("/");
  const hrefs = await page.locator("nav a[href^='#'], header a[href^='#']").evaluateAll((links) =>
    links.map((a) => a.getAttribute("href") as string),
  );
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of new Set(hrefs)) {
    await expect(page.locator(href)).toHaveCount(1);
  }
});

test("clicking Work scrolls to the works section", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Work" }).first().click();
  await expect(page).toHaveURL(/#works-section$/);
  await expect(page.locator("#works-section")).toBeInViewport({ ratio: 0.1 });
});

test("brand link returns to the hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".brand-link")).toHaveAttribute("href", "#hero-section");
});
