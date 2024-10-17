import axios from "axios";

const API_CHART_URL = "/chart";
const API_ALL_GENRES_URL = "/genre";

export const loadCharts = async () => {
  try {
    const data = await axios(API_CHART_URL);
    if (!data.data) throw Error();

    return data.data;
  } catch {
    throw Error("Failed to load chart!");
  }
};

export const loadGenres = async () => {
  try {
    const data = await axios(API_ALL_GENRES_URL);

    if (!data.data.data) throw Error();

    return data.data.data.filter((genre) => genre.id !== 0);
  } catch {
    throw Error("Failed to load genres!");
  }
};
