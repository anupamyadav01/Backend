const puppeteer = require("puppeteer");
const xlsx = require("xlsx");

const URL =
  "https://www.flipkart.com/search?q=tech%20products&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=offśs";

const getProductData = async (pageURL) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(pageURL, { waitUntil: "networkidle2" });

    const productsData = await page.evaluate(() => {
      const newData = [];
      const ItemCards = document.querySelectorAll(".slAVV4");
      ItemCards.forEach((item) => {
        const itemName = item.querySelector("a.wjcEIp");
        const rating = item.querySelector(".XQDdHH");
        const price = item.querySelector(".Nx9bqj");
        const available = item.querySelector("div.n5vj9c div");

        if (itemName && rating && price && available) {
          newData.push({
            Name: itemName.innerText,
            Rating: rating.innerText,
            Price: price.innerText,
            Available:
              available.innerText !== "Only few left"
                ? "Available"
                : available.innerText,
          });
        }
      });
      //   console.log(newData);
      return newData;
    });
    await browser.close();
    const workbook = xlsx.utils.book_new();
    const sheet = xlsx.utils.json_to_sheet(productsData);
    xlsx.utils.book_append_sheet(workbook, sheet, "Products");
    xlsx.writeFile(workbook, "flipkart_products.xlsx");
    console.log("Product data successfully exported to flipkart_products.xlsx");
  } catch (error) {
    console.log("Failed to get product data", error);
  }
};
getProductData(URL);
