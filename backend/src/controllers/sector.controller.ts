import { createSector, getAllSectors } from "@backend/services/sector.service";
import { IncomingMessage, ServerResponse } from "http";

export const handleRequest = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  if (req.method === "POST" && req.url === "/api/sector") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      try {
        const data = JSON.parse(body);
        const result = await createSector(data);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ id: result.id }));
      } catch (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: "Error al registrar el sector" }));
      }
    });
  } else if (req.method === "GET" && req.url === "/api/sectores") {
    try {
      const sectores = await getAllSectors();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(sectores));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Error al obtener sectores" }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Ruta no encontrada" }));
  }
};
