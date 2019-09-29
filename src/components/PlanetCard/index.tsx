import React from "react";
import "./styles.css";
import Hidden from "../Hidden";

export default function PlanetCard(props: {
  name: string;
  population: string;
  climate: string;
  terrain: string;
  countFilms: string | number;
  films: string;
}) {
  return (
    <div className="planetCard">
      <div className="header">
        <h2>{props.name}</h2>
      </div>
      <div className="body">
        <p>
          População:
          <Hidden txt={props.population} />
        </p>
        <p>
          Clima: <Hidden txt={props.climate} />
        </p>
        <p>
          Terreno(s): <Hidden txt={props.terrain} />
        </p>
        <p>
          Quantidade de filmes: <Hidden txt={props.countFilms} />
        </p>
        {/* <p>{props.films}</p> */}
      </div>
    </div>
  );
}
