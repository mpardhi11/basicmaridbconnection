import userController from "./user.controller.js";
import express from "express";

const router = express.Router();
router.get("/", userController.sayHello);

// router.get("/getEmployee/:id", userController.getEmployee);
// router.get("/getAllEmployees", userController.getAllEmployees)
export default router;
