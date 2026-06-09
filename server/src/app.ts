import express from "express";
import { healthRouter } from "./routes/health.js";
import { createTableIfNotExist } from "./model/ createTable.js";
import { coffeeRouter } from "./routes/coffee.js";
const app = express();

createTableIfNotExist();
app.use("/health", healthRouter);
app.use("/coffee", coffeeRouter);
app
  .listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  })
  .on("error", (err) => {
    console.error("Error running server:", err);
  });

// routes
// coffee
// featured
