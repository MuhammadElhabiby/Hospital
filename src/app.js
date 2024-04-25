import express from "express";
import path from "path";
import morgan from "morgan";

import PatientRoutes from "./routes/PatientRoutes.js";
import TreatmentRoutes from "./routes/TreatmentRoutes.js";
import DoctorRoutes from "./routes/DoctorRoutes.js";
import HospitalRoutes from "./routes/HospitalRoutes.js";
import WorkersRoutes from "./routes/WorkersRoutes.js";
import BillRoutes from "./routes/BillRoutes.js";

import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use(PatientRoutes);
app.use(TreatmentRoutes);
app.use(DoctorRoutes);
app.use(HospitalRoutes);
app.use(WorkersRoutes);
app.use(BillRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
export default app;
