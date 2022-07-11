import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { AmmosData, AmmosResponse } from '../interface/ammosInterface';

export const useAmmos = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [ammosList, setAmmosList] = useState<AmmosData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/ammos?limit=100';

    const loadAmmos = async() => {
        setIsLoading(true);
        const resp = await classApi.get<AmmosResponse>(url);
        setAmmosList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadAmmos();
    },[])

    return {
        ammosList,
        isLoading
    }

}