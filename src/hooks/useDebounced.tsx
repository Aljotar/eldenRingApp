import React, { useEffect, useState } from 'react'

export const useDebounced = (input: string = '', time: number = 3000) => {

    const [debouncedValue, setDebouncedValue] = useState(input)

    useEffect(() => {
      
        const timeout = setTimeout( () => {
            setDebouncedValue (input)
        })
    
      return () => {
            clearTimeout( timeout )
      }
    }, [input])
    

    return debouncedValue;    

}
