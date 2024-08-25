const puppeteer = require("puppeteer");

const run = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.yahoo.com");

  const title = await page.title();
  console.log(title);
  const heading = await page.$eval("h1", (element) => element.textContent);
  console.log(heading);

  await page.pdf({ path: "example.pdf", format: "A4" });
  await page.screenshot({ path: "example.png" });
  await browser.close();
};

run();
