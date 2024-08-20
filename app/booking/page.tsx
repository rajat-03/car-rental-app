'use client'
import { getBookingDetails } from '@/services'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const Bookingpage = () => {
    const [userData, setUserData] = useState<any>([])
    const {user} = useUser();
    const [userName, setUserName] = useState<String>("") // Ensured userName is initialized as string
    const [loading, setLoading] = useState(false)


    const currentDate = () => {
        const currentDate = new Date()
        const year = currentDate.getFullYear()
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2)
        const day = ('0' + currentDate.getDate()).slice(-2)
        const formattedDate = year + '-' + month + '-' + day

        return formattedDate
    }

    useEffect(() => {
        setLoading(true);
        if(user)
        {
            setUserName(user?.fullName || 'Error: User not found')
        }
        const getData = async () => {
            try {
                const res: any = await getBookingDetails(userName) // Pass userName to getBookingDetails
                setUserData(res.bookingDetail)
                
            } catch (error) {
                console.error("Error fetching booking details:", error)
            }
        }
        getData()
        setLoading(false)
    }, [user, userName]) // Added userName to the dependency array

    if(loading)
        {
            return <h1>Loading...</h1>
        }

    return (
        <>
            <div className="lg:flex-cols-3 xl:flex-cols-4 mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-4 p-20 sm:px-10">
                {userData &&
                    userData?.map((data: any, index: any) => (
                        <div
                            className="card w-96 bg-base-100 shadow-xl"
                            key={index}
                        >
                            <div className="card-body">
                                <h2 className="card-title">
                                    Booking {index + 1}
                                </h2>
                                <p><strong>Car:</strong>{data.carId.name} </p>
                                <p><strong>Location:</strong> {data.location}</p>
                                <p><strong>Pick-Up Date:</strong> {data.pickUpDate}</p>
                                <p><strong>Pick-Up Time:</strong> {data.pickUpTime}</p>
                                <p><strong>Drop-Off Date:</strong> {data.dropOffDate}</p>
                                <p><strong>Drop-off Time:</strong> {data.dropOffTime}</p>
                                <p><strong>Contact No. :</strong> {data.contactNumber}</p>
                                <div className="card-actions justify-end">
                                    {data.dropOffDate < currentDate() ? (
                                        <button className="btn btn-disabled">
                                            Completed
                                        </button>
                                    ) : (
                                        <button className="btn btn-primary">
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Bookingpage
