const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const { myToken, authenticationMiddleware } = require("./TokenGeneration");
const { database } = require("./Database");

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  const data = await database(email, password);
  res.json({ data });
});

app.use("/", authenticationMiddleware);

app.get("/", async (req, res) => {
  console.log("inside app.get");
  const email = req.email;
  res.json({email});
});

app.listen(port, () => {
  console.log(`server is running in the port ${port}`);
});
