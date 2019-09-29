import api from "./api";
import { ResultPlanet, DataPlanet } from "./ResultPlanet";
import Axios from "axios";
import random from "../utils/random";
import { errorNotification } from "../notifications/notification";
import { DataFilm } from "./ResultFilms";

type resPlanetAll = {
  data: ResultPlanet;
};

type resPlanetOne = {
  data: DataPlanet;
};

type resFilmGetFilms = {
  data: DataFilm[];
};

// type resFilmOne = {
//   data: DataFilm;
// };

export const sortPlanet = () =>
  new Promise(async (result, reject) => {
    try {
      const pgs: resPlanetAll = await api.get("/planets");
      // const countPgs = Math.ceil(pgs.data.count / 10);
      // const sortNum = random(countPgs);
      const sortNum = random(pgs.data.count);
      const res: resPlanetOne = await api.get(`/planets/${sortNum}`);
      let films: DataFilm[] = [];
      if (res.data.films.length > 0) {
        films = await getFilms(res.data.films);
      }
      result({
        ...res.data,
        ...(films.length > 0 ? { films } : {})
      });
    } catch (error) {
      errorNotification("Erro ao sortear um card.");
    }
  });

export const getFilm = (url: string): Promise<DataFilm> =>
  new Promise(async (result, reject) => {
    try {
      const film = await api.get(url);
      result(film.data);
    } catch (error) {
      reject(error);
      errorNotification("Erro ao buscar o filme.");
    }
  });

export const getFilms = (url: string[]): Promise<DataFilm[]> =>
  new Promise(async (result, reject) => {
    await Promise.all(url.map(el => Axios.get(el)))
      .then((res: { data: DataFilm }[]) => {
        const _res = res.map(el => el.data);
        result(_res);
      })
      .catch(err => {
        reject(err);
        errorNotification("Erro ao buscar os filmes.");
      });
  });

export const searchPlanet = (string: string) =>
  new Promise(async (result, reject) => {
    const search: resPlanetAll = await api.get(`/planets/?search=${string}`);
    if (search.data.count === 0) {
      reject({
        error: "Nada foi encontrado."
      });
      errorNotification("Nada foi encontrado.");
    }
    result(search.data.results);
  });
