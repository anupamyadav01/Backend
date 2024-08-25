const puppeteer = require("puppeteer");

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await browser.close();
})();

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await page.screenshot({ path: "google.png" });
    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
