import express from "express";
import { healthRouter } from "./routes/health.js";
const app = express();

app.use("/health", healthRouter);

app
  .listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  })
  .on("error", (err) => {
    console.error("Error running server:", err);
  });
