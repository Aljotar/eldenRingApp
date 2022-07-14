import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { IncantationData, IncantationsResponse } from '../interface/incantationsInterface';

export const useIncantation = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [incantationList, setIncantationList] = useState<IncantationData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/incantations?limit=100';

    const loadIncantation = async() => {
        setIsLoading(true);
        const resp = await classApi.get<IncantationsResponse>(url);
        setIncantationList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadIncantation();
    },[])

    return {
        incantationList,
        isLoading
    }

}