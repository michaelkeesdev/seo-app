import express from "express";
import { MONITORS } from "./data/monitors";

const app = express();
const PORT = 3000;

app.get("/monitors", (req: express.Request, res: express.Response) => {
  res.send(MONITORS);
});

app.get("/monitors/:id", (req: express.Request, res: express.Response) => {
  res.send(MONITORS[0]);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
