import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const imageUrl = "https://picsum.photos/200/300";

    const htmlContent = `
      <html>
      <head>
        <title>Random Image</title>
      </head>
      <body>
        <h1>Random Image from Picsum</h1>
        <img src="${imageUrl}" alt="Random Image" />
      </body>
      </html>
    `;

    res.send(htmlContent);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({
      status: false,
      message: "Error fetching data from API",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
