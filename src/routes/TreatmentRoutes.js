import { Router } from "express";
import {
  createTreatment,
  deleteTreatment,
  editTreatment,
  renderTreatment,
  updateTreatment,
} from "../controllers/TreatmentController.js";
const router = Router();

router.get("/t", renderTreatment);
router.post("/addTreatment", createTreatment);
router.get("/updateTreatment/:id", editTreatment);
router.post("/updateTreatment/:id", updateTreatment);
router.get("/deleteTreatment/:id", deleteTreatment);

export default router;
