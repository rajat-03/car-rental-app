'use client'

import { useState } from 'react'
import BookingModel from '../CarBooking/BookingModal'
import CarCard from './CarCard'

const CarList = (props: any) => {
    const [selectedCar, setSelectedCar] = useState<any>([])


    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {props.carsList?.map((car: any, index: number) => (
                <div
                    key={index}
                    onClick={() => {(document.getElementById('my_modal_4') as HTMLDialogElement)?.showModal();
                        setSelectedCar(car)
                    }}
                >
                    <CarCard car={car} />
                </div>
            ))}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_4" className="modal">
                <BookingModel selectedCar={selectedCar} />
            </dialog>
        </div>
    )
}

export default CarList
