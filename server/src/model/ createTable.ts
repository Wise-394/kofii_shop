import { database } from "../config/databaseConfig.js";

export const createTableIfNotExist = () => {
  createCoffeeTable();
};

const createCoffeeTable = async () => {
  try {
    await database.query(`CREATE TABLE IF NOT EXISTS coffee(
        Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name TEXT NOT NULL,
        DESCRIPTION TEXT NOT NULL,
        PRICE INT NOT NULL)`);
  } catch (err) {
    console.error("Unable to create coffee table", err);
    throw err;
  }
};
