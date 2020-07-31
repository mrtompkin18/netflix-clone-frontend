
const API_KEY = process.env.REACT_APP_API_KEY

const MOVIES_URI = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchDiscover: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fectchTopRated: `/movie/top_rate?api_key=${API_KEY}&language=en-US`,
    fectchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fectchHororMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fectchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fectchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export { MOVIES_URI };