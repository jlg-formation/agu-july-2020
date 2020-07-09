import express from "express";
import serveIndex from "serve-index";
import path from "path";
// import cors from "cors";
import { Article } from "../front/src/app/interfaces/article";

const app = express();
const port = 3000;
const www = "../front/dist/front";

let articles: Article[] = [
  {
    id: "a0",
    name: "Tournevis",
    price: 2.44,
    qty: 234,
  },
  {
    id: "a1",
    name: "Tournevis Cruciforme",
    price: 4,
    qty: 1000,
  },
  {
    id: "a2",
    name: "Pince",
    price: 23.3,
    qty: 46,
  },
];

let lastId = 2;

// app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("url", req.url);
  next();
});

app.use("/ws", (req, res, next) => {
  setTimeout(next, 2000);
});

app.get("/ws/articles", (req, res) => {
  res.json(articles);
});

app.post("/ws/articles", (req, res) => {
  const article: Article = req.body;
  lastId++;
  article.id = "a" + lastId;
  articles.push(article);
  res.json(article);
});

app.delete("/ws/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

app.get(["/legal", "/article/*"], (req, res) => {
  res.sendFile(path.resolve(__dirname, www + "/index.html"));
});

app.use(express.static(www));
app.use(serveIndex(www));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
