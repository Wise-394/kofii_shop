import { database } from "../config/databaseConfig.js";
import type { Coffee } from "../types/types.js";

export const getAllCoffee = async () => {
  try {
    const { rows } = await database.query(`SELECT * FROM coffee`);
    return rows;
  } catch (err) {
    console.error("unable to get all coffee", err);
    throw err;
  }
};

export const getAllFeaturedCoffee = async () => {
  try {
    const { rows } = await database.query(
      `SELECT * FROM coffee WHERE isFeatured = TRUE`,
    );
    return rows;
  } catch (err) {
    console.error("unable to get all featured coffee", err);
    throw err;
  }
};

export const toggleFeaturedCoffee = async (id: number) => {
  try {
    const { rows } = await database.query(
      `UPDATE coffee SET isFeatured = NOT isFeatured WHERE id = $1`,
      [id],
    );
    return rows;
  } catch (err) {
    console.error("unable to toggle featured coffee", err);
    throw err;
  }
};

export const getCoffeeById = async (id: number) => {
  try {
    const { rows } = await database.query(
      `SELECT * FROM coffee WHERE id = $1`,
      [id],
    );
    return rows[0];
  } catch (err) {
    console.error("unable to get coffee by id", err);
    throw err;
  }
};
export const insertCoffee = async (coffee: Coffee) => {
  try {
    await database.query(
      `INSERT INTO coffee(name, description, price) VALUES($1,$2,$3)`,
      [coffee.name, coffee.description, coffee.price],
    );
  } catch (err) {
    console.error("unable to insert coffee", err);
    throw err;
  }
};

export const updateCoffee = async (coffee: Coffee) => {
  try {
    await database.query(
      `UPDATE coffee SET name = $1, description = $2, price = $3 WHERE id = $4`,
      [coffee.name, coffee.description, coffee.price, coffee.id],
    );
  } catch (err) {
    console.error("unable to update coffee", err);
    throw err;
  }
};

export const deleteCOffee = async (id: number) => {
  try {
    await database.query("DELETE FROM coffee WHERE id = $1", [id]);
  } catch (err) {
    console.error("unable to delete coffee", err);
    throw err;
  }
};
