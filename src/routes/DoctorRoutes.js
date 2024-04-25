import { Router } from "express";
import {
  createDoctor,
  deleteDoctor,
  editDoctor,
  renderDoctor,
  updateDoctor,
} from "../controllers/DoctorController.js";
const router = Router();

router.get("/d", renderDoctor);
router.post("/addDoctor", createDoctor);
router.get("/updateDoctor/:id", editDoctor);
router.post("/updateDoctor/:id", updateDoctor);
router.get("/deleteDoctor/:id", deleteDoctor);

export default router;
