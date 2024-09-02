import express from "express";

const app = express();

const port = 3000;
app.use(express.json());
app.get("/", async (req, res) => {
  const response = await fetch("https://picsum.photos/200/300");
  const data = await response.json();
  console.log(data);

  res.json({
    status: true,
    data: data,
  });
});

app.listen(
  (port,
  () => {
    console.log(`Server running at http://localhost:${port}`);
  })
);
