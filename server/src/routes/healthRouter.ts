import { Router } from "express";
import type { ApiMessage } from "../types/types.js";
export const healthRouter = Router();

healthRouter.use("", (req, res) => {
  const response: ApiMessage = { message: "working" };
  res.json(response);
});
