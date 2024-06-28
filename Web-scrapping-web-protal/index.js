const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
const xlsx = require("xlsx");
// const pageURL =
//   "https://www.simplyhired.co.in/search?q=fresher&l=jaipur%2C+rajasthan";

const writeDataInFile = (fileName, data) => {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      console.log("Error while writing in file", err);
      return;
    }
    console.log("file written successfully");
  });
};

const getPageData = async () => {
  try {
    const response = await axios.get(
      "https://internshala.com/jobs/jobs-in-pune/",
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
    const data = response.data;
    console.log(data);
    writeDataInFile("data.txt", data.toString());
  } catch (error) {
    console.log("Error while fitching", error);
  }
};

// getPageData();
const pageData = fs.readFileSync("data.txt", (err, data) => {
  if (err) {
    console.log("Error occurred while reading data", err);
    return;
  }
});

const $ = cheerio.load(pageData);
// console.log($);
const jobsNameArray = [];
const companiesNameArray = [];
const locationsArray = [];
const postedDatesArray = [];
const jobTitles = $(".job-internship-name");

// console.log(jobTitles);
jobTitles.each((index, element) => {
  const jobTitle = $(element).text();
  //   console.log(jobTitle);
  jobsNameArray.push(jobTitle);
});
const companyNames = $(".company-name");

companyNames.each((index, element) => {
  const companyTitle = $(element).text();
  companiesNameArray.push(companyTitle);
  //   console.log(companyName);
});

const locations = $(".locations span a");
// console.log(locations);
locations.each((index, element) => {
  const location = $(element).text();
  // console.log(location.trim());
  locationsArray.push(location.trim());
});

const postedDates3 = $(".status-success");
postedDates3.each((index, element) => {
  const date = $(element).text();
  // console.log(date.trim());
  postedDatesArray.push(date.trim());
});
const postedDates1 = $(".status-info");
postedDates1.each((index, element) => {
  const date = $(element).text();
  // console.log(date.trim());
  postedDatesArray.push(date.trim());
});
const postedDates2 = $(".status-inactive");
postedDates2.each((index, element) => {
  const date = $(element).text();
  // console.log(date.trim());
  postedDatesArray.push(date.trim());
});

const jobs = jobsNameArray.map((job, index) => {
  return {
    JobTitle: job,
    CompanyName: companiesNameArray[index],
    Location: locationsArray[index],
    PostedDate: postedDatesArray[index],
  };
});

console.log(jobs);

const workbook = xlsx.utils.book_new();
const sheet = xlsx.utils.json_to_sheet(jobs);
xlsx.utils.book_append_sheet(workbook, sheet, "JobsData");

xlsx.writeFile(workbook, "JobsData.xlsx");
console.log("XLSX file created successfully!");
