import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { NpcData, NpcResponde } from '../interface/npcInterface';

export const useNpc = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [npcList, setNpcList] = useState<NpcData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/npcs?limit=100';

    const loadNpc = async() => {
        setIsLoading(true);
        const resp = await classApi.get<NpcResponde>(url);
        setNpcList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadNpc();
    },[])

    return {
        npcList,
        isLoading
    }

}