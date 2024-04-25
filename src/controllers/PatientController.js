import { pool } from "../db.js";

export const renderHome = async (req, res) => {
  try {
    res.render("Home");
  } catch (e) {
    console.log(e);
  }
};

export const renderPatient = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Patient");
    res.render("Patient", { patients: rows });
  } catch (e) {
    console.log(e);
  }
};

export const createPatient = async (req, res) => {
  try {
    const newPatient = req.body;
    await pool.query("INSERT INTO Patient set ?", [newPatient]);
    res.redirect("/p");
  } catch (e) {
    console.log(e);
  }
};

export const editPatient = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM Patient WHERE patientId = ?", [
      id,
    ]);
    res.render("Patient_edit", { Patient: result[0] });
  } catch (e) {
    console.log(e);
  }
};

export const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const newPatient = req.body;
    await pool.query("UPDATE Patient set ? WHERE patientId = ?", [newPatient, id]);
    res.redirect("/p");
  } catch (e) {
    console.log(e);
  }
};

export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM Patient WHERE patientId = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "Patient deleted" });
    }
    res.redirect("/p");
  } catch (e) {
    console.log(e);
  }
};
