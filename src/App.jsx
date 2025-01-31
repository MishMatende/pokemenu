import Header from "./components/Header";
import SideNav from "./components/SideNav";
import PokemenuCard from "./components/PokemenuCard";
import { useState } from "react";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(false);

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu);
  }

  function handleCloseMenu() {
    setShowSideMenu(true);
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        handleCloseMenu={handleCloseMenu}
        showSideMenu={showSideMenu}
      />
      <PokemenuCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
