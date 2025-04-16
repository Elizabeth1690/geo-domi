import { IncomingMessage, ServerResponse } from "http";
import { getAvailableSectors } from "@backend/utils/routeUtils";

export const handleSectorRoutes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  if (req.method === "POST" && req.url === "/api/sectores/disponibles") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { lat, lng } = JSON.parse(body);
        if (!lat || !lng) throw new Error("Coordenadas faltantes");

        const disponibles = await getAvailableSectors({
          latitude: lat,
          longitude: lng,
        });
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(disponibles));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Error al procesar solicitud" }));
      }
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Ruta no encontrada" }));
  }
};
