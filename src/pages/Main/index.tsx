import React from "react";
import "./styles.css";
import { sortPlanet, searchPlanet } from "../../services/api/methods";
import InputSearch from "../../components/InputSearch";
import PlanetCard from "../../components/PlanetCard";

export default function Main() {
  React.useEffect(() => {
    // sortPlanet();
    searchPlanet("a");
  }, []);

  return (
    <div className="container">
      <div className="grid">
        <InputSearch labelButton="Go" />
        <div>
          <PlanetCard />
        </div>
      </div>
    </div>
  );
}
