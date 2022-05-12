import React from 'react'

const Navbar = ({ onChange, getData, location }) => {
    return (
        <>
            <header className="shadow-sm md:h[13vh] flex items-center bg-blue-900">
                    <div className="flex flex-col md:flex-row  items-center justify-between py-2 px-5 w-full flex-wrap">
                        <span className="w-fit text-2xl font-bold px-11 py-3 bg-gray-200 rounded-lg font-mono">Weather App</span>
                        <form className="w-2/3  mb-0 px-5 text-xl" onSubmit={(e) => { e.preventDefault(); getData(); }}>
                            <div className="px-3 relative font-mono ">
                                <input
                                    className="h-10 pr-10 px-4 my-2 placeholder-gray-300 border-gray-400 border-2 rounded-lg focus:z-10 float-right min-w-[40%]"
                                    placeholder='Enter city...' name='city' onChange={onChange} value={location.city}
                                />

                                <button
                                    className="absolute inset-y-0 right-0 p-2 pr-4 mr-px text-gray-600 rounded-r-lg pt-5"
                                    onClick={getData}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
            </header>
        </>
    )
}

export default Navbar