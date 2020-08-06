import React, { Fragment, useState, useRef } from 'react';
import styled from "styled-components";

import { HTTP_METHOD, MOVIES_IMAGE_PATH } from "../constants/request";
import { Header } from "../styleds";
import MovieDetail from "./MovieDetail";
import RowSkeleton from "../skeletons/RowSkeleton";
import useFetch from "../hooks/useFetch";

const Wrapper = styled.div`
    width:100%;
    .poster__image__wrapper {
        display: flex;
        padding-left: 60px;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .poster__item {
        width: 160px;
        object-fit: contain;
        height: 250px;
        margin-right: 15px;
        transition: transform 450ms;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
        }
    }
`;

function Row({ title, url }) {
    const { isLoading, responseData } = useFetch(url, HTTP_METHOD.GET);
    const [movieDetail, setMovieDetail] = useState(null);

    if (isLoading) {
        return (
            <Wrapper>
                <Header ml="60px">{title}</Header>
                <div className="poster__image__wrapper">
                    <RowSkeleton />
                </div>
            </Wrapper>
        );
    }

    const renderMovies = (results) => {
        return <div className="poster__image__wrapper"> {
            results.map(movie => {
                return (
                    <img className="poster__item"
                        key={movie.id}
                        src={MOVIES_IMAGE_PATH.concat(movie.poster_path)}
                        alt={movie?.title || movie.id}
                        onClick={() => {
                            setMovieDetail(movie)
                        }}
                    />
                );
            })
        } </div>
    }

    const { results } = responseData;

    return (
        <Wrapper>
            <Header ml="60px">{title}</Header>
            {renderMovies(results)}
            {movieDetail && <MovieDetail movie={movieDetail} />}
        </Wrapper >
    )
}

export default React.memo(Row);
