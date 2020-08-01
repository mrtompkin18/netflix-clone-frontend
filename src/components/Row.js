import React from 'react';
import styled from "styled-components";
import { HTTP_METHOD, MOVIES_IMAGE_PATH } from "../constants/request";
import { Header2 } from "../styleds";
import useFetch from "../hooks/useFetch"

const Wrapper = styled.div`
    width:100%;
`;

const PosterImageWrapper = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
`;

const PosterImage = styled.img`
    width: 100%;
    object-fit: contain;
    max-height: 260px;
    padding-right: 15px;
    transition: transform 450ms;
    cursor: pointer;
    &:hover{
        transform: scale(1.08);
    }
`;

function Row({ title, url }) {
    const { isLoading, responseData } = useFetch(url, HTTP_METHOD.GET);

    if (isLoading) {
        return <h2>Loading..</h2>
    }

    const renderMovies = () => {
        const { results } = responseData;
        return results.map(item => {
            return <PosterImage
                key={item.id}
                src={MOVIES_IMAGE_PATH.concat(item.poster_path)}
                alt={item.title} />
        })
    }

    return (
        <Wrapper>
            <Header2>{title}</Header2>
            <PosterImageWrapper>
                {renderMovies()}
            </PosterImageWrapper>
        </Wrapper>
    )
}

export default Row;
