import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { ShieldData, ShieldResponse } from '../interface/shieldInterface';

export const useShield = () => {

    const [ isLoading, setIsLoading] = useState(true);
    const [shieldList, setShieldList] = useState<ShieldData[]>([]);
    const [ pages, setPages] = useState(0);
  
    const url = `https://eldenring.fanapis.com/api/shields?limit=100`;

    const loadShield = async() => {
        setIsLoading(true);
        const resp = await classApi.get<ShieldResponse>(url);
        setShieldList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadShield();
    },[pages])

    return {
        shieldList,
        isLoading,
        pages,
        setPages
    }

}