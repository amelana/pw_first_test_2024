import { test, expect } from "@playwright/test";

test("login us admin", async ({ page }) => {
  await page.setViewportSize({
    width: 1006,
    height: 778,
  });
  await page.goto("https://shopdemo-alex-hot.koyeb.app/");
  await page.locator("header li:nth-of-type(3) span").click();
  await page.locator("header ul button:nth-of-type(1)").click();
  await page.locator("div.p-0 > div:nth-of-type(1) input").click();
  await page
    .locator("div.p-0 > div:nth-of-type(1) input")
    .fill("xotabu4@gmail.com");
  await page.locator("div.p-0 > div:nth-of-type(1) input").click();
  await page.locator("main div:nth-of-type(2) input").click();
  await page.locator("main div:nth-of-type(2) input").fill("xotabu4@gmail.com");
  await page.locator("main button.custom-btn-primary > span").click();
  await expect(page.getByRole("heading", { name: "Login" })).not.toBeVisible();
});
