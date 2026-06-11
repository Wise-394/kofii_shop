import type { Request, Response, NextFunction } from "express";
import { getUserByUsername } from "../model/usersQueries.js";
import type { ApiMessage } from "../types/types.js";
export const loginController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const password = req.body.password;
    const username = getUserByUsername(req.body.username);
    let response: ApiMessage;
    if (!username) {
      response = { message: "invalid username or password" };
      return res.status(401).json(response);
    }
    //TODO check password
    //TODO BCRYPTJS
    //if not return 401
    //if correct sign jwt
  } catch (err) {
    console.error("unable to login user", err);
    throw err;
  }
};
