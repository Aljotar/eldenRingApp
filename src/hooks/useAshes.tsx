import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { AshesData, AshesResponse } from '../interface/ashesInterface';

export const useAshes = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [ashesList, setAshesList] = useState<AshesData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/ashes?limit=100';

    const loadashes = async() => {
        setIsLoading(true);
        const resp = await classApi.get<AshesResponse>(url);
        setAshesList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadashes();
    },[])

    return {
        ashesList,
        isLoading
    }

}