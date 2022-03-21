import express from "express";
import {
  food_description,
  create_food,
  get_featured_food,
} from "../controllers/foodController.js";
const router = express.Router();

router.get("/food-description/:_id", food_description);
router.post("/create-food", create_food);
router.get("/get_featured_foods", get_featured_food);

export default router;
