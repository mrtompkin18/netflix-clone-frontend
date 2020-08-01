import React, { useState, useEffect } from 'react';
import { MOVIES_URI, HTTP_METHOD } from "../constants/request";
import { Header2 } from "../styleds";
import useFetch from "../hooks/useFetch";

function Banner() {
    const { isLoading, responseData } = useFetch(MOVIES_URI.FETCH_DISCOVER, HTTP_METHOD.GET);

    if (isLoading) {
        return <Header2>Loading..</Header2>
    }

    console.log(responseData.results)
    return (
        <div>

        </div>
    )
}

export default Banner
