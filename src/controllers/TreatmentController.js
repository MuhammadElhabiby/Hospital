import { pool } from "../db.js";

export const renderTreatment = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Treatment");
    res.render("Treatment", { Treatments: rows });
  } catch (e) {
    console.log(e);
  }
};

export const createTreatment = async (req, res) => {
  try {
    const newTreatment = req.body;
    await pool.query("INSERT INTO Treatment set ?", [newTreatment]);
    res.redirect("/t");
  } catch (e) {
    console.log(e);
  }
};

export const editTreatment = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM Treatment WHERE treatmentId = ?", [
      id,
    ]);
    res.render("Treatment_edit", { Treatment: result[0] });
  } catch (e) {
    console.log(e);
  }
};

export const updateTreatment = async (req, res) => {
  try {
    const { id } = req.params;
    const newTreatment = req.body;
    await pool.query("UPDATE Treatment set ? WHERE treatmentId = ?", [newTreatment, id]);
    res.redirect("/t");
  } catch (e) {
    console.log(e);
  }
};

export const deleteTreatment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM Treatment WHERE treatmentId = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "Treatment deleted" });
    }
    res.redirect("/t");
  } catch (e) {
    console.log(e);
  }
};
