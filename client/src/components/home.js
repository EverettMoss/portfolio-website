import React from "react";
import Navbar from './navbar'

function Home() {
    return (
        <>
            <Navbar/>
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-semi-bold py-2 px-4 rounded-full">
                home ig
            </button>
        </>
    )
}

export default Home;