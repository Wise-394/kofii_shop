import { Router } from "express";
import { getAllCoffeeController } from "../controller/coffeeController.js";
import { upload } from "../config/multer.js";
import { insertCoffeeController } from "../controller/coffeeController.js";
export const coffeeRouter = Router();

coffeeRouter.get("/", getAllCoffeeController);
coffeeRouter.post("/", upload.single("image"), insertCoffeeController);

// coffeeRouter.get("/:id");
// coffeeRouter.put("/:id");
// coffeeRouter.delete("/:id");
