import express from "express";
import path from "path";
import { validateCardNumber } from "./validate-card-number";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get("/", (req, res, next) => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

app.post('/verify-credit-card-number', (req, res) => {
  res.send({ cardIsValid: validateCardNumber(req.body.cardNumber) });
});

app.listen(3001, () => {
  console.log("App listening on port 3001");
});