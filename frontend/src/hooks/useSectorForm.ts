import { useState } from "react";
import { Sector } from "../types/Sector";

export interface Coordenadas {
  lat: number;
  lng: number;
  address?: string;
}

export const useSectorForm = () => {
  const [nombre, setNombre] = useState("");
  const [coordenadas, setCoordenadas] = useState<Coordenadas | null>(null);
  const [horario, setHorario] = useState<Sector["horario"]>({
    lunes: [8, 17],
    martes: [8, 17],
    miercoles: [8, 17],
    jueves: [8, 17],
    viernes: [8, 17],
  });

  const reset = () => {
    setNombre("");
    setCoordenadas(null);
    setHorario({
      lunes: [8, 17],
      martes: [8, 17],
      miercoles: [8, 17],
      jueves: [8, 17],
      viernes: [8, 17],
    });
  };

  return {
    nombre,
    setNombre,
    coordenadas,
    setCoordenadas,
    horario,
    setHorario,
    reset,
  };
};
