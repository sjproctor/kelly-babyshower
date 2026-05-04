import { test, expect } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"

const wcagTags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]

test("home page has no detectable WCAG 2.1 AA violations", async ({ page }) => {
  await page.goto("/")
  const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze()
  expect(results.violations).toEqual([])
})

test("rsvp page has no detectable WCAG 2.1 AA violations", async ({ page }) => {
  await page.goto("/rsvp")
  const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze()
  expect(results.violations).toEqual([])
})

test("rsvp form surfaces field-level errors on empty submit", async ({
  page
}) => {
  await page.goto("/rsvp")
  const nameInput = page.locator("#name")
  await expect(nameInput).toBeVisible()
  await page.getByRole("button", { name: "Submit" }).click()

  await expect(nameInput).toHaveAttribute("aria-invalid", "true")
  await expect(nameInput).toBeFocused()
  await expect(page.locator("#name-error")).toBeVisible()
})
