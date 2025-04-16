import { useSectorForm } from "../hooks/useSectorForm";
import { GeoapifyAutocomplete } from "../components/GeoapifyAutocomplete";
import { useState } from "react";

export const FormSector = () => {
  const {
    nombre,
    setNombre,
    coordenadas,
    setCoordenadas,
    horario,
    setHorario,
    reset,
  } = useSectorForm();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!coordenadas) return alert("Selecciona una dirección válida");

    const nuevoSector = {
      nombre,
      coordenadas,
      horario,
    };

    try {
      setLoading(true);
      const res = await fetch("/api/sector", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoSector),
      });

      if (!res.ok) throw new Error("Error al guardar sector");

      alert("Sector guardado correctamente.");
      reset();
    } catch (err) {
      alert("Hubo un error al guardar el sector.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-xl font-bold">Crear nuevo sector</h2>

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Nombre del sector"
        required
      />

      <GeoapifyAutocomplete
        onSelect={({ coordinates, address }) => {
          setCoordenadas({
            lat: coordinates.lat,
            lng: coordinates.lng,
            address,
          });
        }}
      />

      {coordenadas?.address && (
        <p className="text-sm text-green-600">
          📍 Dirección seleccionada: <strong>{coordenadas.address}</strong>
        </p>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading || !coordenadas}
      >
        {loading ? "Guardando..." : "Guardar sector"}
      </button>
    </form>
  );
};
