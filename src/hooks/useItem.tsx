import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { ItemData, ItemResponse } from '../interface/itemsInterface';

export const useItem = () => {

    const [ isLoading, setIsLoading] = useState(true);
    const [itemList, setItemList] = useState<ItemData[]>([]);
    const [ pages, setPages] = useState(0);
  
    const url = `https://eldenring.fanapis.com/api/items?limit=100&page=${pages}`;

    const loadItem = async() => {
        setIsLoading(true);
        const resp = await classApi.get<ItemResponse>(url);
        setItemList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadItem();
    },[pages])

    return {
        itemList,
        isLoading,
        pages,
        setPages
    }

}