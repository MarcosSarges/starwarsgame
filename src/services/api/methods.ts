import api from "./api";
import { Result } from "./Result";
import Axios from "axios";

export const sortPlanet = () =>
  new Promise(async (result, reject) => {
    try {
      const res: { data: Result } = await api.get("/planets");
      console.log(res.data);
      const countPgs = Math.ceil(res.data.count / 10);

      getFilms(res.data.results[0].films);
    } catch (error) {
      console.error(error);
    }
  });

export const getFilms = (url: string[]) =>
  new Promise(async (result, reject) => {
    await Promise.all(url.map(el => Axios.get(el)))
      .then((res: { data: any }[]) => {
        console.log(res[0].data);
      })
      .catch(err => err);
  });
