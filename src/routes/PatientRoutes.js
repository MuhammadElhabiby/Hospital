import { Router } from "express";
import {
  createPatient,
  deletePatient,
  editPatient,
  renderPatient,
  updatePatient,
  renderHome,
} from "../controllers/PatientController.js";
const router = Router();

router.get("/", renderHome);
router.get("/p", renderPatient);
router.post("/addPatient", createPatient);
router.get("/updatePatient/:id", editPatient);
router.post("/updatePatient/:id", updatePatient);
router.get("/deletePatient/:id", deletePatient);

export default router;
