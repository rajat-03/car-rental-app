import { FaLocationDot } from "react-icons/fa6";

const SearchInput = () => {
    return (
        <div>
            <h2 className="text-center text-[20px] text-gray-400 mb-5">
                Lets Search what you need
            </h2>

            <div className="flex justify-center">
                <div className="flex gap-2 divide-x rounded-full bg-gray-100 p-1 px-5">
                    <div className="flex items-center">
                    <FaLocationDot />
                        <input
                            type="text"
                            placeholder="Location"
                            className="bg-transparent p-2 outline-none"
                        />
                    </div>
                    <input
                        type="date"
                        className="bg-transparent p-2 text-gray-400 outline-none"
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchInput
