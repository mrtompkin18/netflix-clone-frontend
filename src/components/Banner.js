import React from 'react';
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import * as Icon from 'react-feather';

import { MOVIES_URI, HTTP_METHOD, MOVIES_IMAGE_PATH } from "../constants/request";
import { Button, Overview, Skeleton } from "../styleds";

const BannerBackdrop = styled.div`
    object-fit: contain;
    background-size: cover;
    background-image: ${props => `url(${MOVIES_IMAGE_PATH.concat(props.imageURL)})`};
    background-position: top center;
    height: 600px;
    width: 100%;
    color: #fff;
    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 600px;
        background: rgb(0,0,0);
        background: linear-gradient(0deg,rgb(21 21 21) 0%,rgba(0,0,0,0) 70%);
        top: 0;
        padding: 0;
        margin: 0;
    }
`;

const BannerContent = styled.div`
    padding: 220px 60px;
    width: 40%;
    z-index: 99;
    position: relative;
    @media (max-width: 700px) {
        width: fit-content;
        padding: 180px 20px;
    }
    h1 {
        font-size: 60px;
        margin: 10px 0px;
        @media (max-width: 700px) {
            font-size: 40px;
        }
    }
`;

function Banner() {
    const { isLoading, responseData } = useFetch(MOVIES_URI.FETCH_UPCOMING, HTTP_METHOD.GET);

    if (isLoading) return <Skeleton width="100%" height="600px" />;

    const movie = responseData.results[
        Math.floor(Math.random() * responseData.results.length)
    ];

    return (
        <BannerBackdrop imageURL={movie.backdrop_path}>
            <BannerContent>
                <h1>{movie.title}</h1>
                <Overview>{movie.overview}</Overview>
                <Button playBtn={true}><Icon.Play size={18} /> Play</Button>
                <Button><Icon.Info size={18} /> More Info</Button>
            </BannerContent>
        </BannerBackdrop>
    )
}

export default React.memo(Banner);
