import express from "express";
import routers from "./routes/routes_controler";
import { join } from "path";

const app = express();
const port = 3000;

app.get("/", (req: express.Request, res: express.Response): void => {
  const path = join(__dirname, "../src/index.html");
  res.sendFile(path);
});

app.use("/", routers);

app.listen(port, (): void => {
  console.log(`Server Start: http://localhost:${port}`);
});

export default app;
