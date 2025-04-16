import { SectorProvider } from "../../frontend/src/contexts/SectorContext"; 
import Home from "../src/pages/Home";

function App() {
  return (
    <SectorProvider>
      <div className="min-h-screen bg-gray-100">
        <Home />
      </div>
    </SectorProvider>
  );
}

export default App;
