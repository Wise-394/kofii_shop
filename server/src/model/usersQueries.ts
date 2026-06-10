import type { User } from "../types/types.js";
import { database } from "../config/databaseConfig.js";
//create, read, update, delete
export const insertUser = async (user: User) => {
  try {
    await database.query(
      `INSERT INTO users(username, password) VALUES($1, $2)`,
      [user.username, user.password],
    );
  } catch (err) {
    console.error("unable to insert user", err);
    throw err;
  }
};

export const getUserById = async (id: number) => {
  try {
    await database.query("SELECT * FROM users WHERE id = $1", [id]);
  } catch (err) {
    console.error("unablet to get username by id", err);
    throw err;
  }
};

export const updateUser = async (user: User) => {
  try {
    await database.query(
      `UPDATE users SET username = $1 password = $2 WHERE id = $3`,
      [user.username, user.password, user.id],
    );
  } catch (err) {
    console.error("unable to update user", err);
    throw err;
  }
};

export const deleteUser = async (id: number) => {
  try {
    await database.query(`DELETE FROM users WHERE id = $1`, [id]);
  } catch (err) {
    console.error("unable to delete user", err);
    throw err;
  }
};
