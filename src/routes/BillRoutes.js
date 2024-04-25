import { Router } from "express";
import {
  createBill,
  deleteBill,
  editBill,
  renderBill,
  updateBill,
} from "../controllers/BillController.js";
const router = Router();

router.get("/b", renderBill);
router.post("/addBill", createBill);
router.get("/updateBill/:id", editBill);
router.post("/updateBill/:id", updateBill);
router.get("/deleteBill/:id", deleteBill);

export default router;
