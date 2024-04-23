'use client'

import CarFiltersOption from '@/components/Home/CarFiltersOption'
import CarList from '@/components/Home/CarList'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import { getCarLists } from '@/services'
import { useEffect, useState } from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [carsList, setCarsList] = useState<any>([])
    const [carsOrgList, setCarsOrgList] = useState<any>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getCarList_ = async () => {
            setLoading(true);
            const result: any = await getCarLists()
            //  console.log(result)
            setCarsList(result?.carList)
            setCarsOrgList(result?.carList)
            setLoading(false);
        }

        getCarList_()
    }, [])

    const filterCarList = (brand: string) => {
        const filterList = carsOrgList.filter(
            (car: any) => car.carBrand === brand
        )
        setCarsList(filterList)
    }

    const orderCarList = (order: any) => {
        const sortedList = [...carsOrgList].sort((a, b) => 
        order==-1? a.price-b.price : b.price-a.price);
        setCarsList(sortedList)
    }

    if(loading)
    {
        return <h1>Loading...</h1>
    }
    return (
        <div className="p-5 sm:px-10 md:px-20">
            <Hero />
            <SearchInput />
            <CarFiltersOption
                carsList={carsOrgList}
                setBrand={(value: string) => filterCarList(value)}
                setOrderCarList={(value: any) => orderCarList(value)}
            />
            <CarList carsList={carsList} />
            <ToastContainer 
            autoClose={2000}
            position= "bottom-right"
            />
        </div>
    )
}
