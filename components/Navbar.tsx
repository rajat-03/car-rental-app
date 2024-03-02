import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between border-b-[1px] p-5 shadow-sm">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <div className="hidden gap-5 md:flex">
                <h1 className="cursor-pointer rounded-full p-2 px-4 hover:bg-blue-500 hover:text-white">
                    Home
                </h1>
                <h1 className="cursor-pointer rounded-full p-2 px-4 hover:bg-blue-500 hover:text-white">
                    History
                </h1>
                <h1 className="cursor-pointer rounded-full p-2 px-4 hover:bg-blue-500 hover:text-white">
                    Contact Us
                </h1>
            </div>
            <UserButton />
        </div>
    )
}

export default Navbar
