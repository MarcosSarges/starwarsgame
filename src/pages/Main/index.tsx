import React from "react";
import "./styles.css";
import { sortPlanet, searchPlanet } from "../../services/api/methods";
import InputSearch from "../../components/InputSearch";
import PlanetCard from "../../components/PlanetCard";
import { DataPlanet } from "../../services/api/ResultPlanet";
import Loading from "../../components/Loading";

export default function Main() {
  const [loading, setLoading] = React.useState(true);
  const [planetSort, setPlanetSort] = React.useState([] as DataPlanet[]);
  const [input, setInput] = React.useState("");

  const init = () => {
    sortPlanet()
      .then(res => {
        //@ts-ignore
        setPlanetSort([res]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleSearch = () => {
    // e.preventDefault();
    setLoading(true);
    searchPlanet(input)
      .then(res => {
        setInput("");
        //@ts-ignore
        setPlanetSort(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <div className="container">
      <div className="grid">
        <h1 className="titlePage">
          StarWars
          <br />
          qual o planeta?
        </h1>

        <div className="divInput">
          <InputSearch
            labelButton="Pesquisar"
            secundLabelButton="Sortear outro planeta"
            inputProps={{
              value: input,
              onChange: e => setInput(e.target.value),
              placeholder: "Digite o nome do planeta..."
            }}
            buttonProps={{
              onSubmit: e => {
                e.preventDefault();
                handleSearch();
              },
              onClick: e => {
                e.preventDefault();
                handleSearch();
              }
            }}
            secundButton={{
              onSubmit: e => {
                e.preventDefault();
                setLoading(true);
                init();
              },
              onClick: e => {
                e.preventDefault();
                setLoading(true);
                init();
              }
            }}
          />
        </div>
        <div className={loading ? "loading" : "cards"}>
          {loading ? (
            <Loading />
          ) : (
            planetSort.map(planet => (
              <PlanetCard
                key={planet.url}
                terrain={planet.terrain}
                climate={planet.climate}
                name={planet.name}
                population={planet.population}
                countFilms={planet.films.length}
                films={planet.films.map((el: any) => el.title).join(",")}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
