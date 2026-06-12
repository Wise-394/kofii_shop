import type { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateRegisterInput = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username cannot be empty")
    .bail()
    .isAlphanumeric()
    .withMessage("username must only contain letters and numbers")
    .bail()
    .isLength({ min: 8, max: 30 })
    .withMessage("username must be within 8-30 characters"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("password cannot be empty")
    .bail()
    .isLength({ min: 8, max: 30 })
    .withMessage("password must be within 8-30 characters"),
];

export const validateLoginInput = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username cannot be empty")
    .bail()
    .isAlphanumeric()
    .withMessage("username must only contain letters and numbers")
    .isLength({ min: 1, max: 30 })
    .withMessage("Invalid username or password"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("password cannot be empty")
    .bail()
    .isLength({ min: 1, max: 30 })
    .withMessage("Invalid username or password"),
];

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  return next();
};
