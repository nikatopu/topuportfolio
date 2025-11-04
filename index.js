import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
var __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/public");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect(301, "https://www.nikatopu.dev/");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
