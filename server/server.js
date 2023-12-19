import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.json("getting server");
});

app.post("/message", (req, res) => {
  const newMessage = req.body;
  console.log(newMessage);
  res.json(newMessage);
});

app.listen(port, () => {
  console.log(`App is running ${port}`);
});
