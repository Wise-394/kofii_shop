import express from "express";
import { healthRouter } from "./routes/health.js";
import { createTableIfNotExist } from "./model/ createTable.js";
import { coffeeRouter } from "./routes/coffee.js";
import { passportSetup } from "./config/passportConfig.js";

const app = express();

createTableIfNotExist();
passportSetup();
app.use(express.urlencoded());
app.use(express.json());
app.use("/health", healthRouter);
app.use("/uploads", express.static("uploads"));
app.use("/coffee", coffeeRouter);
app
  .listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  })
  .on("error", (err) => {
    console.error("Error running server:", err);
  });
