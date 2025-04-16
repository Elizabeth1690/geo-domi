// src/utils/timeUtils.ts
export const isWithinOperatingHours = (horario: any): boolean => {
  const now = new Date();
  const dia = now
    .toLocaleDateString("es-CO", { weekday: "long" })
    .toLowerCase();
  const horaActual = now.getHours() + now.getMinutes() / 60;
  const horarioDia = horario[dia];
  if (!horarioDia) return false;
  const [inicio, fin] = horarioDia;
  return horaActual >= inicio && horaActual <= fin;
};
