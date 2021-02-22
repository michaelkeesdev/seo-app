import cors from "cors";
import express from "express";

import { MONITORS } from "./data/monitors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/monitors", (req: express.Request, res: express.Response) => {
  res.send(MONITORS);
});

app.get("/monitors/:id", (req: express.Request, res: express.Response) => {
  res.send(MONITORS.find(monitor => monitor.productId === req.params.id));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
