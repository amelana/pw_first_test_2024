import { test, expect } from "@playwright/test";

const users = ["test@test.com", "xotabu4@gmail.com"];

//for (const user of users) {
//  test("submit contact us form " + user, async ({ page }) => {
//    await page.setViewportSize({
//      width: 1006,
//      height: 778,
//    });
//    await page.goto("https://shopdemo-alex-hot.koyeb.app/");
//    await page.getByRole("link", { name: "Contact Us" }).nth(1).click();
//    await page.locator("div.row > div:nth-of-type(1) input").click();
//await page.getByRole("textbox", { name: "You Full Name" }).fill("svitlana");
//    await page.getByPlaceholder("Your Email Address").click();
//    await page.getByPlaceholder("Your Email Address").fill(user);
//    await page.locator("textarea").click();
//    await page.locator("textarea").fill("this is my first automated record!");
//    await page.locator("div.contact-actions span").click();
//    //await expect(page.getByPlaceholder("Your Email Address")).toBeEmpty();
//  });
//}

test.describe("user submit contact us form", () => {
  test("tests submit contact us form", async ({ page }) => {
    await page.setViewportSize({
      width: 1006,
      height: 778,
    });
    await page.goto("https://shopdemo-alex-hot.koyeb.app/");
    await page.getByRole("link", { name: "Contact Us" }).nth(1).click();
    await page.locator("div.row > div:nth-of-type(1) input").fill("Svitlana");
    await page
      .getByPlaceholder("Your Email Address")
      .fill(Date.now() + "@test.com");
    await page.locator("textarea").fill("this is my first automated record!");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByPlaceholder("Your Email Address")).toBeEmpty();
  });
});

test.describe("user can NOT submit contact us form", () => {
  test("tests not submit contact us form", async ({ page }) => {
    await page.setViewportSize({
      width: 1006,
      height: 778,
    });
    await page.goto("https://shopdemo-alex-hot.koyeb.app/");
    await page.getByRole("link", { name: "Contact Us" }).nth(1).click();
    await page.locator("div.row > div:nth-of-type(1) input").fill("Test");
    await page.getByPlaceholder("Your Email Address").fill("test@test.com");
    await page.locator("textarea").fill("this is my first automated record!");
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(
      page.getByRole("heading", { name: "Please Try Again!" })
    ).toBeVisible();
    await expect(
      page.getByText("A request already existed for same email address")
    ).toBeVisible();
  });
});
