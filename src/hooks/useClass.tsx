import React, { useEffect, useState } from 'react';
import { classApi } from '../api/consultApi';
import { ClassData, ClassResponse } from '../interface/classInterfaces';

export const useClass = () => {

    const [ isLoading, setIsLoading] = useState(true)
    const [classList, setClassList] = useState<ClassData[]>([])
  
    const url = 'https://eldenring.fanapis.com/api/classes';

    const loadClass = async() => {
        setIsLoading(true);
        const resp = await classApi.get<ClassResponse>(url);
        setClassList(resp.data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        loadClass();
    },[])

    return {
        classList,
        isLoading
    }

}
