import axios from "axios";

const API_BASE_URL = "https://api.deezer.com";
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

export async function loadGenre(genreId) {
  try {
    const [genreData, radiosData] = await Promise.all([
      axios(`${API_ALL_GENRES_URL}/${genreId}`),
      axios(`${API_ALL_GENRES_URL}/${genreId}/radios`),
    ]);

    if (!genreData?.data || !radiosData?.data?.data) throw Error();

    const radios = radiosData.data.data;
    const randomIndex = Math.floor(Math.random() * radios.length);
    const tracksData = await axios(radios[randomIndex].tracklist.replace(API_BASE_URL, ""));

    return {
      genre: genreData.data,
      tracks: tracksData.data.data,
    };
  } catch {
    throw Error("Failed to load genre!");
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
