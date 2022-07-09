import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { BossData, BossResponse } from '../interface/bossInterface';

export const useBoss = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [bossList, setBossList] = useState<BossData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/bosses?limit=100';

    const loadBoss = async() => {
        setIsLoading(true);
        const resp = await classApi.get<BossResponse>(url);
        setBossList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadBoss();
    },[])

    return {
        bossList,
        isLoading
    }

}
