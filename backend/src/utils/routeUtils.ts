import { isWithin5Km } from "./geoUtils";
import { isWithinOperatingHours } from "./timeUtils";
import { getAllSectors } from "@backend/services/sector.service";

export const getAvailableSectors = async (userCoords: any) => {
  const sectores = await getAllSectors();

  return sectores.filter((sector: any) => {
    const estaCerca = isWithin5Km(userCoords, sector.coordenadas);
    const estaEnHorario = isWithinOperatingHours(sector.horario);
    return estaCerca && estaEnHorario;
  });
};
