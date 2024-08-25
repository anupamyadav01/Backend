const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Replace 'URL_HERE' with the Amazon URL you want to scrape
  await page.goto(
    "https://www.amazon.in/s?k=phone+under+15+thousand&ref=nb_sb_noss"
  );

  // Scrape the text content of the span inside the h2 elements
  const products = await page.evaluate(() => {
    const productCards = document.querySelectorAll(".puis-card-container");

    return Array.from(productCards).map((card, index) => {
      const titleElement = card.querySelector("h2 a span");
      const priceElement = card.querySelector(".a-price .a-offscreen");
      const imageElement = card.querySelector(".s-image");
      const ratingElement = card.querySelector(".a-icon-alt");
      const reviewsCountElement = card.querySelector(
        ".a-link-normal .a-size-base"
      );

      return {
        id: index + 1, // Simple ID based on position
        title: titleElement ? titleElement.innerText.trim() : null,
        price: priceElement ? priceElement.innerText.trim() : null,
        image: imageElement ? imageElement.src : null,
        rating: ratingElement ? ratingElement.innerText.trim() : null,
        reviewsCount: reviewsCountElement
          ? reviewsCountElement.innerText.trim()
          : null,
      };
    });
  });

  console.log(products);

  //   console.log(imageLinks);
  fs.writeFile("amazon.json", JSON.stringify(products), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully");
    }
  });
  await browser.close();
})();
