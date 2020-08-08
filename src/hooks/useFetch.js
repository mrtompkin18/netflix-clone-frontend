import api from "../services/api";
import { useState, useEffect } from "react";

function useFetch(url, options = {}) {
    const [isLoading, setIsLoading] = useState(true);
    const [responseData, setResponseData] = useState({});

    useEffect(() => {
        (async () => {
            const response = await api({ url, ...options });
            setResponseData(response.data);
            setIsLoading(false);
        })();
    }, [url, options]);

    return { isLoading, responseData }
}

export default useFetch;