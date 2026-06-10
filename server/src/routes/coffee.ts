import { Router } from "express";
import {
  getAllCoffeeController,
  getCoffeeByIdController,
  insertCoffeeController,
} from "../controller/coffeeController.js";
import { upload } from "../config/multer.js";

export const coffeeRouter = Router();

coffeeRouter.get("/", getAllCoffeeController);
coffeeRouter.post("/", upload.single("image"), insertCoffeeController);

coffeeRouter.get("/:id", getCoffeeByIdController);
// coffeeRouter.put("/:id");
// coffeeRouter.delete("/:id",);
