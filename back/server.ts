import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const app = express();
const port = 3000;
const www = "www";

const articles = [
  {
    name: "Tournevis",
    price: 2.44,
    qty: 234,
  },
  {
    name: "Tournevis Cruciforme",
    price: 4,
    qty: 1000,
  },
  {
    name: "Pince",
    price: 23.3,
    qty: 46,
  },
];

app.use(cors());

app.use((req, res, next) => {
  console.log("url", req.url);
  next();
});

app.get("/ws/articles", (req, res) => {
  res.json(articles);
});

app.use(express.static(www));
app.use(serveIndex(www));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
