import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(9000, () =>
  console.log(`Express Todo Api app listening on port 9000`)
);
