import express from "express";
import { healthRouter } from "./routes/healthRouter.js";
import { createTableIfNotExist } from "./model/ createTable.js";
import { coffeeRouter } from "./routes/coffeeRouter.js";
import { passportSetup } from "./config/passportConfig.js";
import { loginRouter } from "./routes/loginRouter.js";
import type { Request, Response, NextFunction } from "express";
import cors from "cors";
const app = express();

createTableIfNotExist();
passportSetup();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/health", healthRouter);
app.use("/uploads", express.static("uploads"));
app.use("/coffee", coffeeRouter);
app.use("/login", loginRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
    errors: err.errors || [],
  });
});
app
  .listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  })
  .on("error", (err) => {
    console.error("Error running server:", err);
  });
