import { test, expect } from "@playwright/test";

test("test submit contact us like record&play", async ({ page }) => {
  await page.goto("https://shopdemo-alex-hot.koyeb.app/");
  await page.getByRole("link", { name: "Contact Us" }).nth(1).click();
  await page.getByPlaceholder("You Full Name").click();
  await page.getByPlaceholder("You Full Name").fill("test");
  await page.getByPlaceholder("Your Email Address").click();
  await page.getByPlaceholder("Your Email Address").fill("test@test.com");
  await page.getByPlaceholder("Please Describe Your Message").click();
  await page
    .getByPlaceholder("Please Describe Your Message")
    .fill("it's my first test playwright framework!");
  await page.getByRole("button", { name: "Submit" }).click();
});
