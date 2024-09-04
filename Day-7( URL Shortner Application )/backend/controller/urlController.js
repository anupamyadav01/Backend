import { nanoid } from "nanoid";
import fs from "fs";

const portNo = process.env.PORT_NO || 8080;

const isURLValid = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const getShortURL = (req, res) => {
  const urlFromUser = req.body.url;
  if (!isURLValid(urlFromUser)) {
    return res.status(400).json({
      status: false,
      message: "Please provide a valid URL",
    });
  }
  const shortURL = nanoid(6);

  const urlsDataFromFile = JSON.parse(fs.readFileSync("URLs.json", "utf8"));
  console.log(urlsDataFromFile);

  // if data is in big amount then it is not good way to do
  // const urls = { ...urlsDataFromFile, [shortURL]: urlFromUser };

  // alternate way to do this

  // adding new url in existing urls object
  urlsDataFromFile[shortURL] = urlFromUser;

  fs.writeFileSync("URLs.json", JSON.stringify(urlsDataFromFile));

  res.send({
    sucess: true,
    shortURL: `https://localhost:${portNo}/${shortURL}`,
  });
};

const redirectOriginalURL = (req, res) => {
  const shortURL = req.params.shortURL;
  // console.log(shortURL);
  const urlsDataFromFile = JSON.parse(fs.readFileSync("URLs.json", "utf8"));

  if (urlsDataFromFile[shortURL] === undefined) {
    return res.status(404).json({
      sucess: false,
      message: "Not found",
    });
  }
  res.redirect(urlsDataFromFile[shortURL]);

  res.send("success");
};

export const urlController = { getShortURL, redirectOriginalURL };
