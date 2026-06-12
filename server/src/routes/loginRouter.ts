import { Router } from "express";
import {
  handleValidationErrors,
  validateLoginInput,
} from "../middleware/validation.js";
import { loginController } from "../controller/loginController.js";

export const loginRouter = Router();

loginRouter.post(
  "/",
  ...validateLoginInput,
  handleValidationErrors,
  loginController,
);
