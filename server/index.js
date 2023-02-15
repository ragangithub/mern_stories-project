import express, { application } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

dotenv.config();
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => app.listen(PORT, () => console.log(`server listening ${PORT}`)))
  .catch((error) => {
    console.log(error.message);
  });
