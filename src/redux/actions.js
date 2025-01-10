import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDetails = createAsyncThunk("/covid/getDetails", (country) => {
  api.get("");
  return "PAYLOAD";
});
