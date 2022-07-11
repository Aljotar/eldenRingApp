import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { TalismanData, TalismanResponse } from '../interface/talismanInterface';

export const useTalisman = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [talismanList, setTalismanList] = useState<TalismanData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/talismans?limit=100';

    const loadTalisman = async() => {
        setIsLoading(true);
        const resp = await classApi.get<TalismanResponse>(url);
        setTalismanList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadTalisman();
    },[])

    return {
        talismanList,
        isLoading
    }

}