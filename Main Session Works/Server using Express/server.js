import express from "express";
const app = express();
const port = 6969;
const hostName = "localhost";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});
app.post("/addProducts", (req, res) => {
  const newCar = req.body;
  // products.push(newCar);
  const newData = [...newCar];
  res.send(products);
  const newProducts = [...products, ...newData];
  // console.log(newProducts);
  products.push([...newProducts]);
  console.log(products);
});

// to edit in products array
app.put("/editproducts", (req, res) => {});

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
