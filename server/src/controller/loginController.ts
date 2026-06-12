import type { Request, Response, NextFunction } from "express";
import { getUserByUsername } from "../model/usersQueries.js";
import type { ApiMessage } from "../types/types.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const password = req.body.password;
    const user = await getUserByUsername(req.body.username);
    const response: ApiMessage = { message: "invalid username or password" };

    if (!user) return res.status(401).json(response);
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) return res.status(401).json(response);

    //give jwt
    const token = jwt.sign(
      { sub: user.id, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" },
    );
    return res.json({ token });
  } catch (err) {
    console.error("unable to login user", err);
    next(err);
  }
};
