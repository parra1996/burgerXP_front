import axios from 'axios';
import { useEffect, useState } from 'react';
import Methods from './useFetch.types';
import DataResponse from './useFetch.types';

const useFetch = async ({ method, url, params }: Methods): Promise<DataResponse> => {
    console.log(method, 'method', url, 'url', params, 'params')
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData()
    }, [data, loading, error])

    const fetchData = async () => {

        // const x = await axios({
        //     method: method,
        //     url: url,
        //     params: params
        // });

        try {
            const resp = await axios.get(url, params)
            console.log(resp)
            setData(resp.data)
        } catch (error) {
            setError(error.message)
        }

    }

    return { data, loading, error }
}

export default useFetch;