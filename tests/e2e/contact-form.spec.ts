import { expect, test } from "@playwright/test";

test("the contact form requires every field", async ({ page }) => {
  await page.goto("/#contact-section");
  const form = page.locator("form[data-contact-form]");
  await form.getByRole("button", { name: /Compose email/ }).click();
  const invalid = await form.locator("input:invalid, textarea:invalid").count();
  expect(invalid).toBe(4);
  await expect(page).toHaveURL(/#contact-section$/);
});

test("the contact form accepts a complete message and keeps the recipient", async ({ page }) => {
  await page.goto("/#contact-section");
  const form = page.locator("form[data-contact-form]");
  await expect(form).toHaveAttribute("data-recipient", /@/);
  await form.locator("input[name=name]").fill("Test Person");
  await form.locator("input[name=email]").fill("test@example.com");
  await form.locator("input[name=subject]").fill("Hello");
  await form.locator("textarea[name=message]").fill("Hi there");
  const valid = await form.evaluate((f: HTMLFormElement) => f.checkValidity());
  expect(valid).toBe(true);
});
