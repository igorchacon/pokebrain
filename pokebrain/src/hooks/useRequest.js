import { useEffect, useState } from "react";
import axios from "axios";

// hook para realizar as requisições para a api

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error(error)
            });
    }, [url]);

    return [data];
};

export default useRequestData;