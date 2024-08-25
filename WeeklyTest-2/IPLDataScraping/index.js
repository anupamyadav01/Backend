const fs = require("fs");
const puppeteer = require("puppeteer");

const writeDataInFile = (fileName, data) => {
  fs.writeFile(fileName, JSON.stringify(data), () => {
    if (data) {
      console.log(`Data written to ${fileName} successfully.`);
    } else {
      console.log("Failed to write data to file.");
    }
  });
};

const getSingleSingleSeasonData = async (singlePageURL, page) => {
  try {
    await page.goto(singlePageURL);
    const tableData = await page.evaluate(() => {
      const data = [];

      const rows = document.querySelectorAll("table.st-table.statsTable tr");
      rows.forEach((row) => {
        const columns = row.querySelectorAll("td");

        const playerName =
          columns[1]?.querySelector(".st-ply-name")?.textContent.trim() ||
          "N/A";
        const runs = columns[2]?.textContent.trim() || "N/A";
        const fours = columns[12]?.textContent.trim() || "N/A";
        const sixes = columns[13]?.textContent.trim() || "N/A";
        const centuries = columns[10]?.textContent.trim() || "N/A";
        const fifties = columns[11]?.textContent.trim() || "N/A";
        if (
          playerName !== "N/A" ||
          runs !== "N/A" ||
          fours !== "N/A" ||
          sixes !== "N/A" ||
          centuries !== "N/A" ||
          fifties !== "N/A"
        ) {
          data.push({ playerName, runs, centuries, fifties, fours, sixes });
        }
      });

      return data;
    });
    return tableData;
  } catch (error) {
    console.log("Failed to get IPL data", error);
  }
};

const getDataByYear = () => {};

const getIPLData = async (pageURL) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const tabledata = await getSingleSingleSeasonData(pageURL, page);

  writeDataInFile("IPL2024.json", tabledata);
  await browser.close();
};
const pageURL = "https://www.iplt20.com/stats/";
getIPLData(pageURL);
