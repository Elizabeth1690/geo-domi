import { useEffect, useState } from "react";
import { Sector } from "../types/Sector";

interface SectorTableProps {
  sectores: Sector[];
}

export const SectorTable = ({ sectores }: SectorTableProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <p>Cargando sectores...</p>;

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Nombre del Sector</th>
            <th className="px-4 py-2 text-left">Dirección</th>
            <th className="px-4 py-2 text-left">Horario de Atención</th>
          </tr>
        </thead>
        <tbody>
          {sectores.map((sector) => (
            <tr key={sector.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{sector.nombre}</td>
              <td className="px-4 py-2">
                {sector.coordenadas?.address ?? "Sin dirección"}
              </td>
              <td className="px-4 py-2">
                {sector.horario
                  ? JSON.stringify(sector.horario)
                  : "No definido"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
