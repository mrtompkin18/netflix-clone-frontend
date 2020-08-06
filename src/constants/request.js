
export const API_KEY = process.env.REACT_APP_API_KEY;

export const MOVIES_IMAGE_PATH = "https://image.tmdb.org/t/p/original/";

export const MOVIES_URI = {
    FETCH_TRENDING: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    FETCH_UPCOMING: `/movie/upcoming?api_key=${API_KEY}`,
    FETCH_DISCOVER: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    FETCH_ACTION_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    FETCH_HOROR_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    FETCH_COMEDY_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    FETCH_ROMANCE_MOVIES: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    FETCH_GENRES: `/genre/movie/list?api_key=${API_KEY}&language=en-US`
}

export const HTTP_METHOD = {
    POST: { method: "POST" },
    GET: { method: "GET" },
    PUT: { method: "PUT" },
    PATCH: { method: "PATCH" },
    DELETE: { method: "DELETE" },
}