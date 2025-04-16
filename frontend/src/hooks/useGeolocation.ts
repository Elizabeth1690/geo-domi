
import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setPosition(pos.coords),
      (err) => console.error("Geolocation error:", err)
    );
  }, []);

  return position;
};
