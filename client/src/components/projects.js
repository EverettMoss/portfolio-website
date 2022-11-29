import React from "react";

function Projects() {
    return (
        <>
            <div className="w-screen h-screen bg-sky-100">
                <div className="w-screen">
                    <h1 className="text-3xl font-semi-bold font-sans text-center mb-3">Projects</h1>
                </div>

                <div className="grid grid-cols-3 gap-4 m-5">
                    <div className="bg-slate-50 border-amber-500 border-2 h-48 rounded">
                        <p className="text-center font-sans text-lg">vsco</p>
                    </div>
                    <div className="bg-slate-50 border-cyan-500 border-2 h-48 rounded">
                        <h1 className="text-center font-sans text-lg">music</h1>
                    </div>
                    <div className="bg-slate-50 border-red-500 border-2 h-48 rounded">
                        <p className="text-center font-sans text-lg">credits</p>
                    </div>
                    <div className="bg-slate-50 border-orange-500 border-2 h-48 rounded">
                        <p className="text-center font-sans text-lg">dice</p>
                    </div>
                    <div className="bg-slate-50 border-lime-500 border-2 h-48 rounded">
                        <p className="text-center font-sans text-lg">name</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects;