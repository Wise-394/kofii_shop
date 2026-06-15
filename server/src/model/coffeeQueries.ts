import { database } from "../config/databaseConfig.js";
import type { Coffee } from "../types/types.js";

export const getAllCoffee = async (): Promise<Coffee[]> => {
  try {
    const { rows } = await database.query(`SELECT * FROM coffee`);
    return rows;
  } catch (err) {
    console.error("unable to get all coffee", err);
    throw err;
  }
};

export const getAllFeaturedCoffee = async (): Promise<Coffee[]> => {
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

export const getCoffeeById = async (id: number): Promise<Coffee> => {
  try {
    const { rows } = await database.query(
      `SELECT * FROM coffee WHERE id = $1`,
      [id],
    );
    const coffee: Coffee = {
      id: rows[0].id,
      description: rows[0].description,
      imagePath: rows[0].imagepath,
      name: rows[0].name,
      price: rows[0].price,
      isActive: rows[0].isactive,
      isFeatured: rows[0].isfeatured,
    };
    return coffee;
  } catch (err) {
    console.error("unable to get coffee by id", err);
    throw err;
  }
};
export const insertCoffee = async (coffee: Coffee) => {
  try {
    await database.query(
      `INSERT INTO coffee(name, description, price, imagePath, isFeatured, isActive) VALUES($1,$2,$3, $4, $5, $6)`,
      [
        coffee.name,
        coffee.description,
        coffee.price,
        coffee.imagePath,
        coffee.isFeatured,
        coffee.isActive,
      ],
    );
  } catch (err) {
    console.error("unable to insert coffee", err);
    throw err;
  }
};

export const updateCoffee = async (coffee: Coffee) => {
  try {
    await database.query(
      `UPDATE coffee SET name = $1, description = $2, price = $3, isActive = $4, isFeatured = $5 WHERE id = $6`,
      [
        coffee.name,
        coffee.description,
        coffee.price,
        coffee.isActive,
        coffee.isFeatured,
        coffee.id,
      ],
    );
  } catch (err) {
    console.error("unable to update coffee", err);
    throw err;
  }
};

export const deleteCoffee = async (id: number) => {
  try {
    await database.query("DELETE FROM coffee WHERE id = $1", [id]);
  } catch (err) {
    console.error("unable to delete coffee", err);
    throw err;
  }
};

//TODO ADD QUOTE TO DB
