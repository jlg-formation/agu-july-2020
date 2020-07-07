import express from "express";
import serveIndex from "serve-index";

const app = express();
const port = 3000;
const www = "www";

app.use((req, res, next) => {
  console.log("url", req.url);
  next();
});

app.use(express.static(www));
app.use(serveIndex(www));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
