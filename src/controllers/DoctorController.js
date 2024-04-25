import { pool } from "../db.js";


export const renderDoctor = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Doctor");
    res.render("Doctor", { doctors: rows });
  } catch (e) {
    console.log(e);
  }
};

export const createDoctor = async (req, res) => {
  try {
    const newDoctor = req.body;
    await pool.query("INSERT INTO Doctor set ?", [newDoctor]);
    res.redirect("/d");
  } catch (e) {
    console.log(e);
  }
};

export const editDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM Doctor WHERE drId = ?", [
      Number(id),
    ]);
    res.render("Doctor_edit", { doctor: result[0] });
  } catch (e) {
    console.log(e);
  }

};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const newDoctor = req.body;
    await pool.query("UPDATE Doctor set ? WHERE drId = ?", [newDoctor, id]);
    res.redirect("/d");
  } catch (e) {
    console.log(e);
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM Doctor WHERE drId = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "Doctor deleted" });
    }
    res.redirect("/d");
  } catch (e) {
    console.log(e);
  }

};







