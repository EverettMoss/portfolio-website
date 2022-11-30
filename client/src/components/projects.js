import React from "react";

function Projects() {
    return (
        <>
            <div className="w-screen h-screen bg-sky-100">
                <div className="grid grid-cols-3 gap-4 p-5">
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <p className="text-center font-light text-lg">soundcloud</p>
                    </div>
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <h1 className="text-center font-light text-lg">music</h1>
                    </div>
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <p className="text-center font-light text-lg">credits</p>
                    </div>
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <p className="text-center font-light text-lg">dice</p>
                    </div>
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <p className="text-center font-light text-lg">name</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects;