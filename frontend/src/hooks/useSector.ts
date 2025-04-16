import { useContext } from "react";
import { SectorContext } from "../contexts/SectorContext";

export const useSector = () => {
  const context = useContext(SectorContext);
  if (!context) {
    throw new Error("useSector debe usarse dentro de un SectorProvider");
  }
  return context;
};
