import { test, expect } from "@playwright/test";

test("Test login Phenikaa canvas", async ({ page }) => {
  // vao trang Phenikaa canvas
  await page.goto("https://canvas.phenikaa-uni.edu.vn/login/canvas");

  // dien vao username
  await page
    .locator('input.ic-Input.text[name="pseudonym_session[unique_id]"]')
    .fill("21012892@st.phenikaa-uni.edu.vn");
  // dien password
  await page
    .locator(
      'input.ic-Input.text[role="textbox"][type="password"][name="pseudonym_session[password]"]'
    )
    .fill("Nguyen12345678@");

  // doi nut Login load => click vao nut Login
  await page.waitForSelector(
    'button.Button.Button--login:has-text("Log In")[type="submit"]',
    {
      timeout: 10000,
    }
  );
  await page
    .locator('button.Button.Button--login:has-text("Log In")[type="submit"]')
    .click();

  // Click vao khoa hoc Danh gia va ...
  await page.waitForSelector(
    "a.ic-DashboardCard__link[href='/courses/10837']",
    {
      timeout: 10000,
    }
  );
  await page.locator("a.ic-DashboardCard__link[href='/courses/10837']").click();

  // Click vao Assignments
  await page.click('a:has-text("Bài tập")');

  //   Click vao bai tap
  await page.waitForSelector(
    'a.ig-title:has-text("Sử dụng công cụ Playwright để kiểm thử web tự động")',
    { timeout: 10000 }
  );
  await page
    .locator(
      'a.ig-title:has-text("Sử dụng công cụ Playwright để kiểm thử web tự động")'
    )
    .click();

  // Click vao nut submit
  await page.waitForSelector(
    "button.Button.Button--primary.submit_assignment_link",
    { timeout: 10000 }
  );
  await page
    .locator("button.Button.Button--primary.submit_assignment_link")
    .click();

  await page.pause();
});
