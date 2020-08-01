import React from 'react';
import styled from "styled-components";
import { HTTP_METHOD, MOVIES_IMAGE_PATH } from "../constants/request";
import { Header2 } from "../styleds";
import useFetch from "../hooks/useFetch";

const Wrapper = styled.div`
    width:100%;
`;

const PosterImageWrapper = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
`;

const PosterImage = styled.img`
    width: ${props => props.largPoster ? `160px` : `220px`};
    object-fit: ${props => props.largPoster ? `contain` : `cover`};
    height: ${props => props.largPoster ? `250px` : `120px`};
    margin-right: 15px;
    transition: transform 450ms;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`;

function Row({ title, url, largPoster }) {
    const { isLoading, responseData } = useFetch(url, HTTP_METHOD.GET);

    if (isLoading) {
        return <Header2>Loading..</Header2>
    }

    const renderMovies = () => {
        const { results } = responseData;
        return results.map(item => {
            return <PosterImage
                largPoster={largPoster}
                key={item.id}
                src={MOVIES_IMAGE_PATH.concat(item.poster_path)}
                alt={item.title}
            />
        })
    }

    return (
        <div style={{ paddingLeft: "60px" }}>
            <Wrapper>
                <Header2>{title}</Header2>
                <PosterImageWrapper>
                    {renderMovies()}
                </PosterImageWrapper>
            </Wrapper >
        </div>
    )
}

export default React.memo(Row);
