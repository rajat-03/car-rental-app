import Image from 'next/image'

const Hero = () => {
    return (
        <div className="hero">
            <div className="padding-x flex-1 pt-36">
                <h1 className="hero__title">
                    Premium Car Rental in Your Area.
                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless
                    booking process.
                </p>

                <button className="mt-5 cursor-pointer rounded-full bg-blue-500 p-2 px-4 text-white transition-all hover:scale-105">
                    Explore Cars
                </button>
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
                {/* <div className="hero__image-overlay" /> */}
            </div>
        </div>
    )
}

export default Hero
