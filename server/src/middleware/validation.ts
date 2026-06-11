import type { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateLoginRegisterInput = () => {
  return [
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
};

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) return res.status(400).json({ errors: errors.array() });
  return next();
};
