import React from 'react'

const CarFiltersOption = () => {
    return (
        <div className="mt-10 flex items-center justify-between">
            <div>
                <h2 className="text-[30px] font-bold">Cars Catalog </h2>
                <h2>Explore our cars you might likes</h2>
            </div>
            <div className="flex gap-5">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                        Price
                    </option>
                    <option>Min to Max</option>
                    <option>Max to Min</option>
                </select>

                <select className="select select-bordered hidden w-full max-w-xs md:block">
                    <option disabled selected>
                        Manufacturar
                    </option>
                    <option>Honda</option>
                    <option>KIA</option>
                </select>
            </div>
        </div>
    )
}

export default CarFiltersOption
