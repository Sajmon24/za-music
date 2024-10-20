import axios from "axios";

const API_CHART_URL = "/chart";
const API_ALL_GENRES_URL = "/genre";
const API_SEARCH_URL = "/search";
const API_TOP_TRACKS_RADIOS_URL = "/radio/37151/tracks";

export async function loadCharts() {
  try {
    const data = await axios(API_CHART_URL);
    if (!data.data) throw Error();

    return data.data;
  } catch {
    throw Error("Failed to load chart!");
  }
}

export async function loadGenres() {
  try {
    const data = await axios(API_ALL_GENRES_URL);

    if (!data.data.data) throw Error();

    return data.data.data.filter((genre) => genre.id !== 0);
  } catch {
    throw Error("Failed to load genres!");
  }
}

export async function loadTopRadioTracks() {
  try {
    const data = await axios(`${API_TOP_TRACKS_RADIOS_URL}?limit=100`);
    if (!data.data) throw Error();

    return data.data.data;
  } catch {
    throw Error("Failed to load radio!");
  }
}

export async function search(searchQuery) {
  try {
    const data = await axios(`${API_SEARCH_URL}?q=${searchQuery}`);

    if (!data.data.data) throw Error();

    return data.data.data;
  } catch {
    throw Error("Failed to load tracks!");
  }
}
