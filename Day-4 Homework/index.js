const puppeteer = require("puppeteer");
// const fs = require("fs");
const xlsx = require("xlsx");
const pageURL =
  "https://www.naukri.com/jobs-in-india?clusters=functionalAreaGid%2CwfhType&functionAreaIdGid=4&functionAreaIdGid=5&functionAreaIdGid=8&wfhType=0&wfhType=3";

// const writeDataInFile = (fileName, data) => {
//   fs.writeFile(fileName, JSON.stringify(data), (err) => {
//     if (err) {
//       console.error(`Error writing to file: ${err}`);
//       return;
//     }
//     console.log(`Data saved in ${fileName}`);
//   });
// };
const getJobsData = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // taking a screenshot of the page
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.setViewport({ width: 1080, height: 1024 });
  await page.screenshot({ path: "jobs_page.png" });

  const jobsData = await page.evaluate(() => {
    const jobs = [];
    const jobsCard = document.querySelectorAll("div.srp-jobtuple-wrapper");
    jobsCard.forEach((job) => {
      const jobTitle = job.querySelector("div.row1 a.title") || null;
      const companyName =
        job.querySelector("div.row2 span a.comp-name") || null;
      const location =
        job.querySelector("span.loc-wrap span span.locWdth") || null;
      const postedDate = job.querySelector("span.job-post-day") || null;
      const desc = job.querySelector("span.job-desc") || null;

      if (
        jobTitle !== "N/A" ||
        companyName !== "N/A" ||
        location !== "N/A" ||
        postedDate !== "N/A" ||
        desc !== "N/A"
      ) {
        jobs.push({
          title: jobTitle.innerText.trim(),
          company: companyName.innerText.trim(),
          location: location.innerText.trim(),
          postedDate: postedDate.innerText.trim(),
          description: desc.innerText.trim(),
        });
      }
    });

    return jobs;
  });
  //   console.log(jobsData);
  await browser.close();
  const workbook = xlsx.utils.book_new();
  const sheet = xlsx.utils.json_to_sheet(jobsData);

  xlsx.utils.book_append_sheet(workbook, sheet, "Job Postings");

  xlsx.writeFile(workbook, "naukri_jobs.xlsx");
};
getJobsData(pageURL);
// Maintaining excel file
