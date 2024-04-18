"use client"
import { useEffect, useState } from 'react'

// setBrand is a child function to pass the selected brand to the parent component
// for here brand is passed to parent component
const CarFiltersOption = ({ carsList,setBrand,setOrderCarList }: any) => {
    const [carBrands, setCarBrands] = useState<any>()
    const BrandSet = new Set()

    useEffect(() => {
        if (carsList.length > 0) {
            filterCarList()
        }
    }, [carsList])

    const filterCarList = () => {
        carsList.forEach((element: any) => {
            BrandSet.add(element.carBrand)
        })
        // console.log(BrandSet)
        setCarBrands(Array.from(BrandSet))
    }

    return (
        <div className="mt-10 flex items-center justify-between">
            <div>
                <h2 className="text-[30px] font-bold">Cars Catalog </h2>
                <h2>Explore our cars you might likes</h2>
            </div>
            <div className="flex gap-5">
                <select className="select select-bordered w-full max-w-xs"
                onChange={(e)=>setOrderCarList(e.target.value)}
                defaultValue={"Price"}
                >
                    <option disabled >
                        Price
                    </option>
                    <option value={-1}>Min to Max</option>
                    <option value={1}>Max to Min</option>
                </select>

                <select className="select select-bordered hidden w-full max-w-xs md:block"
                onChange={(e)=>setBrand(e.target.value)}
                defaultValue={"Manufacturar"}
                >
                    <option disabled >
                        Manufacturar
                    </option>
                    {carBrands?.map((brand: string, index: number) => (
                        <option key={index}>{brand}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default CarFiltersOption
