import { Router } from "express";
import {
  handleValidationErrors,
  validateLoginRegisterInput,
} from "../middleware/validation.js";
import { loginController } from "../controller/loginController.js";

export const loginRouter = Router();

loginRouter.post(
  "/",
  validateLoginRegisterInput,
  handleValidationErrors,
  loginController,
);
