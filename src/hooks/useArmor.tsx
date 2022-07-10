import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { ArmorData, ArmorResponse } from '../interface/armorInterface';
import { BossData, BossResponse } from '../interface/bossInterface';

export const useArmor = () => {

    const [ isLoading, setIsLoading] = useState(true);
    const [armorList, setArmorList] = useState<ArmorData[]>([]);
    const [ pages, setPages] = useState(0);
  
    const url = `https://eldenring.fanapis.com/api/armors?limit=100&page=${pages}`;

    const loadArmor = async() => {
        setIsLoading(true);
        const resp = await classApi.get<ArmorResponse>(url);
        setArmorList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadArmor();
    },[pages])

    return {
        armorList,
        isLoading,
        pages,
        setPages
    }

}