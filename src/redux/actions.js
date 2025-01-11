import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import axios from "axios";
import millify from "millify";

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
      continent: data.continent,
      country: data.country,
      capital: responses[1].data[0].capital,
      currency: Object.entries(responses[1].data[0].currencies)[0][1].name,
      day: new Date(data.day).toLocaleDateString("tr"),
      cases: millify(data.cases.total),
      deaths: millify(data.deaths.total),
      tests: millify(data.tests.total),
      population: millify(data.population),
      flags: responses[1].data[0].flags,
    };
    return data;
  }
);
