import { Router } from "express";
import {
  getAllCoffeeController,
  getCoffeeByIdController,
  insertCoffeeController,
} from "../controller/coffeeController.js";
import { upload } from "../config/multer.js";
import passport from "passport";

export const coffeeRouter = Router();

coffeeRouter.get("/", getAllCoffeeController);
coffeeRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("imageFile"),
  insertCoffeeController,
);

coffeeRouter.get("/:id", getCoffeeByIdController);
// coffeeRouter.put("/:id");
// coffeeRouter.delete("/:id",);
