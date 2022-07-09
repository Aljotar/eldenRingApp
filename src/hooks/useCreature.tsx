import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { CreatureData, CreatureResponse } from '../interface/creatureInterface';

export const useCreature = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [creatureList, setCreatureList] = useState<CreatureData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/creatures?limit=100';

    const loadCreature = async() => {
        setIsLoading(true);
        const resp = await classApi.get<CreatureResponse>(url);
        setCreatureList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadCreature();
    },[])

    return {
        creatureList,
        isLoading
    }

}