import type { Request, Response, NextFunction } from "express";
import { getAllCoffee, insertCoffee } from "../model/coffeeQueries.js";
import type { Coffee, ApiMessage } from "../types/types.js";
export const getAllCoffeeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const coffees = await getAllCoffee();
    return res.json(coffees);
  } catch (err) {
    console.error("unable to get all coffee in controller", err);
    next(err);
  }
};

// TODO UPDATE TO FIX IMAGES
export const insertCoffeeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const coffee: Coffee = {
      iD: null,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imagePath: null,
    };
    await insertCoffee(coffee);
    const response: ApiMessage = { message: "success" };
    res.json(response);
  } catch (err) {
    console.error("unable to insert coffee in controller", err);
    next(err);
  }
};
