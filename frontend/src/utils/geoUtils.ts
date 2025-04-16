// src/utils/geoUtils.ts
import { getDistance } from "geolib";

export const isWithin5Km = (
  userCoords: { latitude: number; longitude: number },
  sectorCoords: { lat: number; lng: number }
) => {
  const distance = getDistance(userCoords, {
    latitude: sectorCoords.lat,
    longitude: sectorCoords.lng,
  });
  return distance <= 5000;
};
