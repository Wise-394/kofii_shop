import { Router } from "express";
import { getAllCoffeeController } from "../controller/coffeeController.js";
export const coffeeRouter = Router();

coffeeRouter.get("/", getAllCoffeeController);
coffeeRouter.post("/");

coffeeRouter.get("/:id");
coffeeRouter.put("/:id");
coffeeRouter.delete("/:id");
