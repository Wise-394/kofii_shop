import type { Request, Response, NextFunction } from "express";
import {
  getAllCoffee,
  getAllFeaturedCoffee,
  getCoffeeById,
  insertCoffee,
} from "../model/coffeeQueries.js";
import type { Coffee, ApiMessage } from "../types/types.js";
export const getAllCoffeeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const isFeatured = req.query.isFeatured;
    let coffees: Coffee[];
    if (isFeatured) {
      coffees = await getAllFeaturedCoffee();
    } else {
      coffees = await getAllCoffee();
    }
    return res.json(coffees);
  } catch (err) {
    console.error("unable to get all coffee in controller", err);
    next(err);
  }
};

export const getCoffeeByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
      return res.status(400);
    }
    const coffee = await getCoffeeById(id);
    return res.json(coffee);
  } catch (err) {
    console.error("unable to get coffe by id in controller", err);
    next(err);
  }
};

export const insertCoffeeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const coffee: Coffee = {
      id: null,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imagePath: req.file?.path ?? null,
    };
    await insertCoffee(coffee);
    const response: ApiMessage = { message: "success" };
    res.json(response);
  } catch (err) {
    console.error("unable to insert coffee in controller", err);
    next(err);
  }
};
