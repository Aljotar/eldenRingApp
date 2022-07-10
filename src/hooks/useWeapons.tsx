import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { WeaponData, WeaponsResponse } from '../interface/weaponInterface';

export const useWeapons = () => {

    const [ isLoading, setIsLoading] = useState(true);
    const [weaponList, setWeaponList] = useState<WeaponData[]>([]);
    const [ pages, setPages] = useState(0);
  
    const url = `https://eldenring.fanapis.com/api/weapons?limit=100&page=${pages}`;

    const loadWeapon = async() => {
        setIsLoading(true);
        const resp = await classApi.get<WeaponsResponse>(url);
        setWeaponList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadWeapon();
    },[pages])

    return {
        weaponList,
        isLoading,
        pages,
        setPages
    }

}