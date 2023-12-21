import Database from "better-sqlite3";
import express from "express";
import cors from "cors";

const app = express();
const port = 8080;
const db = new Database("message.db");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  response.json("getting server");
});

app.get("/message", (req, res) => {
  const message = db.prepare("SELECT * FROM messages").all();
  res.json(message);
});

app.post("/message", (req, res) => {
  const userName = req.body.userName;
  const message = req.body.message;

  const newMessage = db
    .prepare(`INSERT INTO messages (userName, message) VALUES (?, ?)`)
    .run(userName, message);
  res.json(newMessage);

  console.log(newMessage);
});

app.listen(port, () => {
  console.log(`App is running ${port}`);
});
