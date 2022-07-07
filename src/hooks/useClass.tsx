import React, { useEffect } from 'react';
import { classApi } from '../api/consultApi';

export const useClass = () => {
  
    const url = 'https://eldenring.fanapis.com/api/classes';

    const loadClass = async() => {

        const resp = await classApi.get(url);
        console.log(resp.data)

    }

    useEffect(() => {
        loadClass();
    },[])

}
