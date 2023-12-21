import Database from "better-sqlite3";
const db = new Database("message.db");

db.exec(
  `
    CREATE TABLE IF NOT EXISTS messages (
        userName TEXT,
        message TEXT
    )
    `
);

db.exec(
  `INSERT INTO messages (userName, message) VALUES (${userName}, ${message})`
);
