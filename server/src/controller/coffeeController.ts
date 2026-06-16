import type { Request, Response, NextFunction } from "express";
import fs from "fs/promises";
import path from "path";
import {
  deleteCoffee,
  getAllCoffee,
  getAllFeaturedCoffee,
  getCoffeeById,
  insertCoffee,
  updateCoffee,
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
    if (isFeatured === "true") {
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
      isFeatured: req.body.isFeatured === "on",
      isActive: req.body.isActive === "on",
    };
    const newCoffee = await insertCoffee(coffee);
    res.json({ coffee: newCoffee });
  } catch (err) {
    console.error("unable to insert coffee in controller", err);
    next(err);
  }
};

export const deleteCoffeeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id as string);
    let response: ApiMessage;
    if (!id || isNaN(id)) {
      response = { message: "invalid id to delete" };
      return res.status(400).json(response);
    }
    const result = await deleteCoffee(id);
    if (result.imagePath) {
      await fs.unlink(path.resolve(result.imagePath));
    }
    return res.json({ message: "Coffee deleted successfully" });
  } catch (err) {
    console.error("unable to delete coffee in controller", err);
    next(err);
  }
};

export const updateCoffeeController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
      return res.status(400).json({ message: "invalid id to delete" });
    }
    const existingCoffee = await getCoffeeById(id);
    if (req.file && existingCoffee.imagePath) {
      await fs.unlink(path.resolve(existingCoffee.imagePath));
    }
    const coffee: Coffee = {
      id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imagePath: req.file?.path ?? existingCoffee.imagePath,
      isActive: req.body.isActive,
      isFeatured: req.body.isFeatured,
    };
    const newCoffee = await updateCoffee(coffee);
    return res.json(newCoffee);
  } catch (err) {
    console.error("unable to update coffee in controller", err);
    next(err);
  }
};
//TODO THROW ERROR WHEN FILE PATH IMAGE IS NULL
