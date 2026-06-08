import { Router } from "express";
import type { apiMessage } from "../types/types.js";
export const healthRouter = Router();

healthRouter.use("", (req, res) => {
  const response: apiMessage = { message: "working" };
  res.json(response);
});
