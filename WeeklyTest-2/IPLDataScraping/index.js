const fs = require("fs");
const puppeteer = require("puppeteer");
const { v4: uuidv4 } = require("uuid"); // Import UUID package

const writeDataInFile = (fileName, data) => {
  fs.writeFile(fileName, JSON.stringify(data, null, 2), () => {
    if (data) {
      console.log(`Data written to ${fileName} successfully.`);
    } else {
      console.log("Failed to write data to file.");
    }
  });
};

const getSingleSingleSeasonData = async (singlePageURL, page, year) => {
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

    // Add year and unique ID to each object
    const enrichedData = tableData.map((player) => ({
      id: uuidv4(), // Generate unique ID
      ...player,
      year, // Add year key-value
    }));

    return enrichedData;
  } catch (error) {
    console.log("Failed to get IPL data", error);
  }
};

const getDataByYear = () => {};

const getIPLData = async (pageURL) => {
  // const browser = await puppeteer.launch({ headless: false });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const tabledata2024 = await getSingleSingleSeasonData(pageURL, page, 2024);
  const tabledata2023 = await getSingleSingleSeasonData(pageURL, page, 2023);
  // Add more years as needed

  const allData = [...tabledata2024, ...tabledata2023]; // Merge all data

  writeDataInFile("IPLData.json", allData);
  await browser.close();
};

const pageURL = "https://www.iplt20.com/stats/";
getIPLData(pageURL);
