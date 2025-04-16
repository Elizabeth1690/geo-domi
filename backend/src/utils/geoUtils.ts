import geolib from "geolib";

export const isWithin5Km = (userCoords: any, sectorCoords: any) => {
  const distance = geolib.getDistance(userCoords, sectorCoords);
  return distance <= 5000; 
};


export const isWithinOperatingHours = (horario: any): boolean => {
  const now = new Date();
  const dia = now
    .toLocaleDateString("es-CO", { weekday: "long" })
    .toLowerCase();
  const horaActual = now.getHours() + now.getMinutes() / 60;
  const horarioDia = horario[dia];

  if (!horarioDia) return false;

  const [horaInicio, horaFin] = horarioDia;
  return horaActual >= horaInicio && horaActual <= horaFin;
};
