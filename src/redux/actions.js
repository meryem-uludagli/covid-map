import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import axios from "axios";

export const getDetails = createAsyncThunk(
  "/covid/getDetails",
  async (country) => {
    const formattedCountry = country.replaceAll(" ", "-");
    const req1 = api.get("/statistics", {
      params: {
        country: formattedCountry,
      },
    });

    const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

    const responses = await Promise.all([req1, req2]);

    let data = responses[0].data.response[0];

    data = {
      continent: data?.continent,
      country: data.country,
      day: data.day,
      cases: data.cases.total,
      deaths: data.deaths.total,
      tests: data.tests.total,
      population: data.population,
      flags: responses[1].data[0].flags,
    };
    return data;
  }
);
