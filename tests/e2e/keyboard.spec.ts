import { expect, test } from "@playwright/test";

// Safari does not Tab onto links by default (macOS setting), so Tab-order tests skip it.
test("the skip link is the first thing a keyboard user reaches", async ({ page, browserName }) => {
  test.skip(browserName === "webkit", "Safari does not Tab onto links by default");
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to main content" });
  await expect(skip).toBeFocused();
});

test("keyboard users can move through the header links", async ({ page, browserName }) => {
  test.skip(browserName === "webkit", "Safari does not Tab onto links by default");
  await page.goto("/");
  const nav = page.locator('nav[aria-label="Main navigation"]');
  const work = nav.getByRole("link", { name: "Work" });
  await work.focus();
  await expect(work).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(nav.getByRole("link", { name: "Skills" })).toBeFocused();
});

test("pressing Enter on a header link jumps to its section", async ({ page }) => {
  await page.goto("/");
  const work = page.locator('nav[aria-label="Main navigation"]').getByRole("link", { name: "Work" });
  await work.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#works-section$/);
});

test("a case study page can be used with the keyboard only", async ({ page }) => {
  await page.goto("/work/the-factory");
  const back = page.getByRole("link", { name: /Back to all work/ });
  await back.focus();
  await expect(back).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/#works-section$/);
});
