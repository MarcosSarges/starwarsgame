import api from "./api";
import { Result } from "./Result";
import Axios from "axios";

export const sortPlanet = () =>
  new Promise((result, reject) => {
    api
      .get("/planets")
      .then((res: { data: Result }) => {
        // result(res.data);
        console.log(res.data);
        getFilms(res.data.results[0].films);
      })
      .catch(err => err);
  });

export const getFilms = (url: string[]) =>
  new Promise(async (result, reject) => {
    await Promise.all(url.map(el => Axios.get(el)))
      .then((res: { data: any }[]) => {
        console.log(res[0].data);
      })
      .catch(err => err);
  });
