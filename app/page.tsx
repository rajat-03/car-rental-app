"use client"

import CarFiltersOption from '@/components/Home/CarFiltersOption'
import CarList from '@/components/Home/CarList'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import { getCarLists } from '@/services'
import { useEffect, useState } from 'react'

export default function Home() {

    const [carsList, setCarsList] = useState<any>([])

    useEffect(() => {
        const getCarList_ = async () => {
            const result:any = await getCarLists()
        //  console.log(result)
            setCarsList(result?.carList)
        }

        getCarList_()
    }, [])

    return (
        
        <div className="p-5 sm:px-10 md:px-20">
            <Hero />
            <SearchInput />
            <CarFiltersOption />
            <CarList carsList={carsList} />
        </div>
    )
}
