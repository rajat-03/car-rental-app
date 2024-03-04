'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { PiSteeringWheelFill } from 'react-icons/pi'
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md'
import { FaGasPump } from 'react-icons/fa6'

const CarCard = (props: any) => {
    const [car, setCar] = useState<any>()

    useEffect(() => {
        // if car is passed from parent component then set the car
        if (props.car) {
            setCar(props.car)
        }
    }, [props.car])
    
    return (
        car && (
            <div className="duration-50 group m-1 cursor-pointer rounded-3xl border-blue-500 bg-gray-50 p-6 hover:border-[1px] hover:bg-white sm:m-5 sm:p-5">
                <h2 className="mb-2 text-[20px] font-medium">{car.name}</h2>
                <h2 className="mb-2 text-[28px] font-bold">
                    <span className="text-sm font-light">₹ </span>
                    {car.price}
                    <span className="text-sm font-light">/day </span>
                </h2>
                <Image
                    src={car.image?.url}
                    alt={car.name}
                    width={220}
                    height={200}
                    className="my-3 h-40 w-full object-contain"
                />
                <div className="flex justify-around group-hover:hidden">
                    <div className="text-center text-gray-500">
                        <PiSteeringWheelFill className="mb-2 w-full text-[22px]" />
                        <h2 className="line-clamp-5 text-[14px] font-light">
                            {car.carType}
                        </h2>
                    </div>

                    <div className="text-center text-gray-500">
                        <MdOutlineAirlineSeatReclineExtra className="mb-2 w-full text-[22px]" />
                        <h2 className="line-clamp-5 text-[14px] font-light">
                            {car.seats} Seats
                        </h2>
                    </div>

                    <div className="text-center text-gray-500">
                        <FaGasPump className="mb-2 w-full text-[22px]" />
                        <h2 className="line-clamp-5 text-[14px] font-light">
                            {car.carAvg} KMPL
                        </h2>
                    </div>
                </div>
                <button className="hidden rounded-lg bg-gradient-to-r from-blue-400 p-2 group-hover:flex">
                    Rent now
                </button>
            </div>
        )
    )
}

export default CarCard
