import React from "react";
import Navbar from './navbar'

function Projects() {
    return (
        <>
            <div className="w-screen h-screen">
                <div className="justify-items-center">
                    <h1 className="text-3xl font-semi-bold font-sans">Projects</h1>
                </div>

                <div className="grid grid-cols-3 gap-4 m-5">
                    <div className="bg-slate-50 border-amber-500 border-2 h-40 rounded">
                        <p>vsco</p>
                    </div>
                    <div className="bg-slate-50 border-cyan-500 border-2 h-40 rounded">
                        <p>music</p>
                    </div>
                    <div className="bg-slate-50 border-red-500 border-2 h-40 rounded">
                        <p>credits</p>
                    </div>
                    <div className="bg-slate-50 border-orange-500 border-2 h-40 rounded">
                        <p>dice</p>
                    </div>
                    <div className="bg-slate-50 border-lime-500 border-2 h-40 rounded">
                        <p>name</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects;