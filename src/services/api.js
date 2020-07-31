import axios from "axios";

const instant = axios.create({
    baseURL: process.env.REACT_APP_MOVIE_URL
})

export default instant;