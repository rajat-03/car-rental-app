import React from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'
import Images from './Images'

const BookingModel = ({ selectedCar }: any) => {
    return (
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            <div className="border-b-[1px] pb-2">
                <h3 className="text-[30px] font-light text-gray-400">
                    Rent A Car Now!!
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                   <Images car={selectedCar}/>
                </div>
                <div>
                    <Form car={selectedCar}/>
                </div>
            </div>
        </form>
    )
}

export default BookingModel
