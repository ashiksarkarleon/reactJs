import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [data, sertData] = useState(null);

    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => sertData(data));
    },[url]);

    return [data];
};

export default useFetch;