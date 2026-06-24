import { Router } from "express";
import {
  deleteCoffeeController,
  getAllCoffeeController,
  getCoffeeByIdController,
  insertCoffeeController,
} from "../controller/coffeeController.js";
import { upload } from "../config/multer.js";
import passport from "passport";
import { updateCoffeeController } from "../controller/coffeeController.js";

export const coffeeRouter = Router();

coffeeRouter.get("/", getAllCoffeeController);
coffeeRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("imageFile"),
  insertCoffeeController,
);

coffeeRouter.get("/:id", getCoffeeByIdController);
coffeeRouter.put("/:id", upload.single("imageFile"), updateCoffeeController);
coffeeRouter.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteCoffeeController,
);
