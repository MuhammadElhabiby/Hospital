import { pool } from "../db.js";

export const renderWorkers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Workers");
    res.render("Workers", { Workers: rows });
  } catch (e) {
    console.log(e);
  }
};

export const createWorkers = async (req, res) => {
  try {
    const newWorkers = req.body;
    await pool.query("INSERT INTO Workers set ?", [newWorkers]);
    res.redirect("/w");
  } catch (e) {
    console.log(e);
  }
};

export const editWorkers = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM Workers WHERE workerId = ?", [
      id,
    ]);
    res.render("Workers_edit", { Workers: result[0] });
  } catch (e) {
    console.log(e);
  }
};

export const updateWorkers = async (req, res) => {
  try {
    const { id } = req.params;
    const newWorkers = req.body;
    await pool.query("UPDATE Workers set ? WHERE workerId = ?", [newWorkers, id]);
    res.redirect("/w");
  } catch (e) {
    console.log(e);
  }
};

export const deleteWorkers = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM Workers WHERE workerId = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "Workers deleted" });
    }
    res.redirect("/w");
  } catch (e) {
    console.log(e);
  }
};
