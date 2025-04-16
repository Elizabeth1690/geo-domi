import { useSector } from "../hooks/useSector";
import { FormSector } from "../components/FormSector";
import { SectorTable } from "../components/SectorTable";
import { SectorCard } from "../components/SectorCard";
import { useEffect, useState } from "react";

const Home = () => {
  const { sectores } = useSector();
  const [filteredSectores, setFilteredSectores] = useState(sectores);

  useEffect(() => {
    setFilteredSectores(sectores);
  }, [sectores]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Sectores con servicio de domicilio</h1>
      <FormSector />
      <SectorTable sectores={filteredSectores} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredSectores.map((sector) => (
          <SectorCard key={sector.id} sector={sector} />
        ))}
      </div>
    </div>
  );
};

export default Home;
