import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { SorceriesData, SorceriesResponse } from '../interface/sorceriesInterface';

export const useSorceries = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [sorceriesList, setSorceriesList] = useState<SorceriesData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/sorceries?limit=100';

    const loadSorceries = async() => {
        setIsLoading(true);
        const resp = await classApi.get<SorceriesResponse>(url);
        setSorceriesList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadSorceries();
    },[])

    return {
        sorceriesList,
        isLoading
    }

}