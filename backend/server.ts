import "tsconfig-paths/register";
import { createServer } from "http";
import { handleRequest } from "../backend/src/controllers/sector.controller";
import dotenv from "dotenv";
import { db } from "./src/config/firebase";

dotenv.config();

const PORT = process.env.PORT || 3001;

const server = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  handleRequest(req, res);
});

server.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});
