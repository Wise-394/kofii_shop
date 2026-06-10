import { database } from "../config/databaseConfig.js";

export const createTableIfNotExist = () => {
  createCoffeeTable();
  createUsersTable();
};

const createCoffeeTable = async () => {
  try {
    await database.query(`CREATE TABLE IF NOT EXISTS coffee(
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price INT NOT NULL,
        imagePath TEXT NOT NULL
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
