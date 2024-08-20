'use client'

import { createBooking } from '@/services'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ car }: any) => {
    // get username from clerk
    const { user } = useUser()

    const [loading, setLoading] = useState(true)
    const [formValue, setFormValue] = useState({
        location: '',
        pickUpDate: '',
        dropOffDate: '',
        pickUpTime: '',
        dropOffTime: '',
        contactNumber: '',
        userName: '',
        userEmail: '',
        carId: { connect: { id: '' } },
    })

    useEffect(() => {
        if (car && user) {
            setFormValue({
                ...formValue,
                carId: { connect: { id: car.id } },
                userName: user?.fullName || 'Error: User not found',
                userEmail: user?.emailAddresses[0].emailAddress || 'Error: User not found' 
            })
        }
        setLoading(false)
    }, [car, user])

    const handleChange = (e: any) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/mail",formValue)
            console.log("Respones data ", response.data);

            console.log("formData: ",formValue)
            const resp = await createBooking(formValue)
            
            setFormValue({
                location: '',
                pickUpDate: '',
                dropOffDate: '',
                pickUpTime: '',
                dropOffTime: '',
                contactNumber: '',
                userName: '',
                userEmail: '',
                carId: { connect: { id: '' } },
            })
            toast.success('Booking Confirmed')

        } catch (error) {
            console.log("Error in mail sending in frontend", error);
        }
       
    }

    if (loading) {
        return <div>Loading...</div>
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
                <button className="btn">
                    Close
                </button>
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
