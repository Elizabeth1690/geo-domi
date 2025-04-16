import { Sector } from "../types/Sector";

interface Props {
  sector: Sector;
}

export const SectorCard = ({ sector }: Props) => {
  const isOpen = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); 

    if (sector.horario) {
      const sectorHours = sector.horario[currentDay];
      if (sectorHours) {
        const [open, close] = sectorHours; 
        return currentHour >= open && currentHour < close;
      }
    }
    return false;
  };

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h2 className="text-lg font-bold">{sector.nombre}</h2>
      <p>{isOpen() ? "Abierto ahora" : "Cerrado"}</p>
      <p>{sector.coordenadas?.address ?? "Dirección no disponible"}</p>
    </div>
  );
};
