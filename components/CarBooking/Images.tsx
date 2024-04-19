'use client'

import React, { useEffect, useState } from 'react'

const Images = ({ car }: any) => {
    const [photos, setPhotos] = useState<any[]>([])
    const [selectedImage, setSelectedImage] = useState('')

    useEffect(() => {
        if (car && car.photos) {
            // Check if car and photos exist
            setPhotos(car.photos)
            setSelectedImage(car.photos[0].url);
        }
    }, [car])

    function fullSizeClick(image: any) {
        setSelectedImage(image)
    }

    return (
        <div className="grid grid-cols-1 rounded-3xl bg-gray-50 max-lg:w-10/12 sm:m-5 sm:p-5">
            {selectedImage && (
                <img
                    src={selectedImage} // Display the selected image in full screen
                    className="rounded-lg max-sm:w-screen max-sm:rounded-none"
                    alt="carImage"
                />
            )}
            <div className="grid w-10/12 grid-cols-4 gap-3 pt-4 max-sm:hidden">
                {photos.map((image, imageIndex) => (
                    <button key={imageIndex} className="focus:opacity-60">
                        <img
                            className="rounded-md hover:opacity-70"
                            src={image.url}
                            alt={`image-${imageIndex}`}
                            onClick={(e) => {
                                e.preventDefault()
                                setSelectedImage(image.url)
                                fullSizeClick(image.url)
                            }}
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Images
