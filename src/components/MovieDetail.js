import React, { useRef, useEffect } from 'react';
import styled from "styled-components";
import * as Icon from 'react-feather';

import { MOVIES_IMAGE_PATH } from "../constants/request";
import { Button, Overview } from "../styleds";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    background-color: #000;
    margin-top:10px;
    color: #fff;
    background: ${props => `url(${MOVIES_IMAGE_PATH.concat(props.backdropPath)})`};
    background-size: cover;
    background-position: top center;
    transition: all 0.3s linear;
    overflow: hidden;
    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 400px;
        background: rgb(0,0,0);
        background: linear-gradient(90deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
        top: 0;
        padding: 0;
        margin: 0;
    }
    h1{
        font-size:50px;
    }
    .movie__detail__content {
        position: relative;
        width: 50%;
        z-index: 99;
        padding: 10px 60px;
        overflow: hidden;
        height: 380px;
        .movie__rating {
            vertical-align: middle;
            padding: 10px 0px;
        }
        .genres {
            font-size: 14px;
            opacity: 0.7;
            margin: 15px 0px;
        }
    }
`;

const MovieDetail = ({ movie }) => {
    const myRef = useRef(null);

    const scrollToRef = (ref) => window.scrollTo({
        left: 0,
        top: ref.current.offsetTop - 400,
        behavior: 'smooth'
    });

    useEffect(() => {
        scrollToRef(myRef);
    }, [movie])


    // const { isLoading, responseData } = useFetch(MOVIES_URI.FETCH_GENRES, HTTP_METHOD.GET);

    // if (isLoading) {
    //     return <Fragment></Fragment>;
    // }

    // const renderGenres = (genreList) => {
    //     const genres = genreList
    //         .filter(item => movie.genre_ids.includes(item.id))
    //         .map(item => item.name)
    //         .join(", ");
    //     return <span>{genres}</span>;
    // }

    return (
        <Wrapper ref={myRef} backdropPath={movie.backdrop_path}>
            <div className="movie__detail__content">
                <h1>{movie.title || movie.original_name}</h1>
                <div className="movie__rating">
                    <Icon.Star size={16} color={"yellow"} /> {movie.vote_average}
                </div>
                <Overview opacity={0.7} size={"14px"}>
                    {movie.overview}
                </Overview>
                <Button playBtn={true}>
                    <Icon.Play size={18} /> Play
                    </Button>
                <Button>
                    <Icon.Info size={18} /> More Info
                </Button>
                <div className="genres">
                    <div>Release Date: {movie.release_date || "-"}</div>
                    {/* <div>Genres: {renderGenres(responseData.genres)}</div> */}
                </div>
            </div>
        </Wrapper >
    );
}

export default MovieDetail;
