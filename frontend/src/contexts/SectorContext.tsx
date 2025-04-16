import { createContext, useState, ReactNode, FC } from "react";
import { Sector } from "../types/Sector";

interface SectorContextType {
  sectores: Sector[];
  agregarSector: (nuevo: Sector) => void;
}

export const SectorContext = createContext<SectorContextType | undefined>(
  undefined
);

export const SectorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [sectores, setSectores] = useState<Sector[]>([]);

  const agregarSector = (nuevo: Sector) => {
    setSectores((prev) => [...prev, nuevo]);
  };

  return (
    <SectorContext.Provider value={{ sectores, agregarSector }}>
      {children}
    </SectorContext.Provider>
  );
};
