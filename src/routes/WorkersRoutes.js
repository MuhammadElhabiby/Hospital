import { Router } from "express";
import {
  createWorkers,
  deleteWorkers,
  editWorkers,
  renderWorkers,
  updateWorkers,
} from "../controllers/WorkersController.js";
const router = Router();

router.get("/w", renderWorkers);
router.post("/addWorkers", createWorkers);
router.get("/updateWorkers/:id", editWorkers);
router.post("/updateWorkers/:id", updateWorkers);
router.get("/deleteWorkers/:id", deleteWorkers);

export default router;
