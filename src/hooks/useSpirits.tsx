import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { SpiritsData, SpiritsResponse } from '../interface/spiritsInterface';

export const useSpirits = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [spiritsList, setSpiritsList] = useState<SpiritsData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/spirits?limit=100';

    const loadspirits = async() => {
        setIsLoading(true);
        const resp = await classApi.get<SpiritsResponse>(url);
        setSpiritsList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadspirits();
    },[])

    return {
        spiritsList,
        isLoading
    }

}