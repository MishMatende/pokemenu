import { Header } from "./components/Header";
import { SideNav } from "./components/SideNav";
import { PokemenuCard } from "./components/PokemenuCard";
import { useState } from "react";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  return (
    <>
      <Header />
      <SideNav
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokemenuCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
