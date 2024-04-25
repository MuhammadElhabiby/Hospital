import { pool } from "../db.js";

export const renderBill = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Bill");
    res.render("Bill", { bills: rows });
  } catch (e) {
    console.log(e);
  }
};

export const createBill = async (req, res) => {
  try {
    const newBill = req.body;
    await pool.query("INSERT INTO Bill set ?", [newBill]);
    res.redirect("/b");
  } catch (e) {
    console.log(e);
  }
};

export const editBill = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM Bill WHERE billId = ?", [
      id,
    ]);
    res.render("Bill_edit", { bill: result[0] });
  } catch (e) {
    console.log(e);
  }
};

export const updateBill = async (req, res) => {
  try {
    const { id } = req.params;
    const newBill = req.body;
    await pool.query("UPDATE Bill set ? WHERE billId = ?", [newBill, id]);
    res.redirect("/b");
  } catch (e) {
    console.log(e);
  }
};

export const deleteBill = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM Bill WHERE billId = ?", [id]);
    if (result.affectedRows === 1) {
      res.json({ message: "Bill deleted" });
    }
    res.redirect("/b");
  } catch (e) {
    console.log(e);
  }
};
