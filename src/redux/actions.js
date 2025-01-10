import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDetails = createAsyncThunk(
  "/covid/getDetails",
  async (country) => {
    const res = await api.get("/statistics", {
      params: {
        country,
      },
    });

    const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

    let data = res.data.response[0];

    data = {
      continent: data.continent,
      country: data.country,
      day: data.day,
      cases: data.cases.total,
      deaths: data.deaths.total,
      tests: data.tests.total,
      population: data.population,
    };
    return data;
  }
);
