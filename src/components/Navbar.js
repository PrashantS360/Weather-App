import React from 'react'

const Navbar = ({ onChange, getData, location }) => {
    return (
        <>
            <header className="shadow-sm md:h[13vh] flex items-center bg-blue-900">
                    <div className="flex flex-col md:flex-row items-center md:justify-between py-2 px-5 w-full flex-wrap">
                        <span className="md:min-w-[25%] w-fit text-2xl md:text-3xl font-bold text-center py-3 px-6 my-1 bg-gray-200 rounded-lg font-mono Apptitle">Weather App</span>
                        <form className="md:w-2/3 my-1 w-full mb-0 px-5 text-xl" onSubmit={(e) => { e.preventDefault(); getData(); }}>
                            <div className="md:px-3 relative font-mono w-full m-auto">
                                <input className="h-10 w-full pr-10 px-4 py-6 placeholder-gray-300 border-gray-400 border-2 rounded-lg focus:z-10 "
                                    placeholder='Enter city...' name='city' onChange={onChange} value={location.city}
                                />

                                <button
                                    className="absolute inset-y-0 md:right-0 right-1 p-2 pr-4 mr-px text-gray-600 rounded-r-lg mt-1"
                                    onClick={getData}
                                >
                                    <svg
                                        className="w-7 h-7"
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