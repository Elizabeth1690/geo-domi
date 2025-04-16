

export interface Sector {
  id: string;
  nombre: string;
  coordenadas: {
    lat: number;
    lng: number;
    address?: string;
  };
  horario: {
    [key: string]: [number, number];
  };
}
