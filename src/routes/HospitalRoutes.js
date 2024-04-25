import { Router } from "express";
import {
  createHospital,
  deleteHospital,
  editHospital,
  renderHospital,
  updateHospital,
} from "../controllers/HospitalController.js";
const router = Router();

router.get("/h", renderHospital);
router.post("/addHospital", createHospital);
router.get("/updateHospital/:id", editHospital);
router.post("/updateHospital/:id", updateHospital);
router.get("/deleteHospital/:id", deleteHospital);

export default router;
