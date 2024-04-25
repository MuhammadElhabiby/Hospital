import { pool } from "../db.js";

export const renderHospital = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Hospital");
    res.render("Hospital", { hospitals: rows });
  } catch (e) {
    console.log(e);
  }
};

export const createHospital = async (req, res) => {
  try {
    const newHospital = req.body;
    await pool.query("INSERT INTO Hospital set ?", [newHospital]);
    res.redirect("/h");
  } catch (e) {
    console.log(e);
  }
};

export const editHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM Hospital WHERE roomNum = ?", [
      id,
    ]);
    res.render("Hospital_edit", { Hospital: result[0] });
  } catch (e) {
    console.log(e);
  }
};

export const updateHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const newHospital = req.body;
    await pool.query("UPDATE Hospital set ? WHERE roomNum = ?", [newHospital, id]);
    res.redirect("/h");
  } catch (e) {
    console.log(e);
  }
};

export const deleteHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM Hospital WHERE roomNum = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "Hospital deleted" });
    }
    res.redirect("/h");
  } catch (e) {
    console.log(e);
  }
};
