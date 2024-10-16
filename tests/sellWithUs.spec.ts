import { test, expect } from "@playwright/test";

test("sell with us", async ({ page }) => {
  await page.goto("https://shopdemo-alex-hot.koyeb.app/sell");
  await page.getByPlaceholder("Your Full Name").fill("names");
  await page
    .getByPlaceholder("Your Email Address")
    .fill(Date.now() + "@test.com");
  await page.getByPlaceholder("Your Phone Number").fill("0505867633");
  await page.getByPlaceholder("Your Business Brand").fill("bayractar");
  await page
    .getByPlaceholder("Please Describe Your Business")
    .fill("new drones");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByPlaceholder("Your Full Name")).toBeEmpty();
});
