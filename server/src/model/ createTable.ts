import { database } from "../config/databaseConfig.js";
import bcrypt from "bcryptjs";

export const createTableIfNotExist = async () => {
  await createCoffeeTable();
  await createUsersTable();
  await seedAdminUser();
};

const createCoffeeTable = async () => {
  try {
    await database.query(`CREATE TABLE IF NOT EXISTS coffee(
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC(10,2) NOT NULL,
        imagePath TEXT NOT NULL,
        isActive BOOLEAN NOT NULL,
        isFeatured BOOLEAN NOT NULL)`);
  } catch (err) {
    console.error("Unable to create coffee table", err);
    throw err;
  }
};

export const createUsersTable = async () => {
  try {
    await database.query(`CREATE TABLE IF NOT EXISTS users(
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL
      )`);
  } catch (err) {
    console.error("unable to create users table", err);
    throw err;
  }
};

const seedAdminUser = async () => {
  try {
    const { rows } = await database.query(`SELECT id FROM users LIMIT 1`);

    if (rows.length === 0) {
      const hashedPassword = await bcrypt.hash("admin", 10);
      await database.query(
        `INSERT INTO users (username, password) VALUES ($1, $2)`,
        ["admin", hashedPassword],
      );
      console.log("Admin user seeded.");
    }
  } catch (err) {
    console.error("Unable to seed admin user", err);
    throw err;
  }
};
