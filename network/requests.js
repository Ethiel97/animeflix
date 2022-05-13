import { API_BASE_URL } from "./utils";

async function getAnimes() {
  let req = await fetch(`${API_BASE_URL}/anime`);

  let res = await req.json();
  return res;
}

async function getAnimeGenres() {
  let req = await fetch(`${API_BASE_URL}/genres/anime`);

  let res = await req.json();
  return res;
}

async function getSingleAnime(animeId) {
  let req = await fetch(`${API_BASE_URL}/anime/${animeId}`);

  let res = await req.json();
  return res;
}

async function getRandomAnime() {
  let req = await fetch(`${API_BASE_URL}/random/anime`);

  let res = await req.json();
  return res;
}

async function getAnimeCharacters(animeId) {
  let req = await fetch(`${API_BASE_URL}/anime/${animeId}/characters`);

  let res = await req.json();
  return res;
}
async function getSingleCharacter(characterId) {
  let req = await fetch(`${API_BASE_URL}/characters/${characterId}`);

  let res = await req.json();
  return res;
}

async function searchAnimes(searchTerm) {
  let req = await fetch(`${API_BASE_URL}/anime?q=${searchTerm}`);

  let res = await req.json();
  return res;
}

async function searchCharacters(searchTerm) {
  let req = await fetch(`${API_BASE_URL}/characters?q=${searchTerm}`);

  let res = await req.json();
  return res;
}

async function getTopAnime() {
  let req = await fetch(`${API_BASE_URL}/top/anime`);

  let res = await req.json();
  return res;
}

async function getAnimeRecommendations() {
  let req = await fetch(`${API_BASE_URL}/recommendations/anime`);

  let res = await req.json();
  return res;
}

async function getRecommendationsForAnime(animeId) {
  let req = await fetch(`${API_BASE_URL}/anime/${animeId}/recommendations`);

  let res = await req.json();
  return res;
}

async function getAnimeReviews(animeId) {
  let req = await fetch(`${API_BASE_URL}/anime/${animeId}/reviews`);

  let res = await req.json();
  return res;
}

export {
  getAnimes,
  getRandomAnime,
  getAnimeCharacters,
  getRecommendationsForAnime,
  getAnimeGenres,
  getSingleAnime,
  getSingleCharacter,
  searchAnimes,
  searchCharacters,
  getTopAnime,
  getAnimeRecommendations,
  getAnimeReviews
};

