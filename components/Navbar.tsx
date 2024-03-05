import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className="absolute  z-10 w-full">
            <nav className="mx-auto flex max-w-[1440px] items-center justify-between bg-transparent px-6 py-4 sm:px-16">
                <Link href="/" className="flex items-center justify-center">
                    <Image
                        src="/car-rent-icon.svg"
                        alt="logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                </Link>

                <div className="hidden gap-5 md:flex">
                    <h1 className="cursor-pointer rounded-full p-2 px-4 text-lg hover:bg-blue-500 hover:text-white">
                        Home
                    </h1>
                    <h1 className="cursor-pointer rounded-full p-2 px-4 text-lg hover:bg-blue-500 hover:text-white">
                        History
                    </h1>
                    <h1 className="cursor-pointer rounded-full p-2 px-4 text-lg hover:bg-blue-500 hover:text-white">
                        Contact Us
                    </h1>
                </div>
                
                <UserButton />
                
                
            </nav>
        </header>
    )
}

export default Navbar
