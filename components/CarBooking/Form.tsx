'use client'
import { createBooking } from '@/services'
import React, { useEffect, useState } from 'react'

const Form = ({ car }: any) => {
    const [formValue, setFormValue] = useState({
        location: '',
        pickUpDate: '',
        dropOffDate: '',
        pickUpTime: '',
        dropOffTime: '',
        contactNumber: '',
    })

    const handleChange = (e: any) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        console.log(formValue)
        const resp = await createBooking(formValue)
        console.log(resp)
        
      setFormValue({
        location: '',
        pickUpDate: '',
        dropOffDate: '',
        pickUpTime: '',
        dropOffTime: '',
        contactNumber: '',
      })
    }

    return (
        <div>
            <div className="mb-5 mt-5 flex w-full flex-col">
                <label className="text-gray-400">PickUp Location</label>
                <textarea
                    className="textarea textarea-bordered resize-none"
                    placeholder="Address"
                    name="location"
                    onChange={handleChange}
                />
            </div>

            <div className="flex-col-2 mb-5 flex gap-5">
                <div className="flex w-full flex-col">
                    <label className="text-gray-400">Pick Up Date</label>
                    <input
                        type="date"
                        placeholder="Type Here"
                        className="input input-bordered w-full max-w-lg"
                        name="pickUpDate"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full flex-col">
                    <label className="text-gray-400">Drop Off Date</label>
                    <input
                        type="date"
                        placeholder="Type Here"
                        className="input input-bordered w-full max-w-lg"
                        name="dropOffDate"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex-col-2 mb-5 flex gap-5">
                <div className="flex w-full flex-col">
                    <label className="text-gray-400">Pick Up Time</label>
                    <input
                        type="time"
                        placeholder="Type Here"
                        className="input input-bordered w-full max-w-lg"
                        name="pickUpTime"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full flex-col">
                    <label className="text-gray-400">Drop Off Time</label>
                    <input
                        type="time"
                        placeholder="Type Here"
                        className="input input-bordered w-full max-w-lg"
                        name="dropOffTime"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex w-full flex-col">
                <label className="text-gray-400">Contact Number</label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-lg"
                    name="contactNumber"
                    onChange={handleChange}
                />
            </div>
            <div className="modal-action">
                <button className="btn">Close</button>
                <button
                    className="btn bg-blue-500 text-white hover:bg-blue-700"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Form
