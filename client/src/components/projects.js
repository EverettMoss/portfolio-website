import React from "react";

function Projects() {
    return (
        <>
            <div className="w-screen h-screen bg-sky-100">
                <div className="grid grid-cols-3 gap-4 p-5">
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <a href="/soundcloud">
                            <p className="text-center font-light text-lg text-slate-600">soundcloud</p>
                        </a>
                    </div>
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <h1 className="text-center font-light text-lg text-slate-600">music</h1>
                    </div>
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <p className="text-center font-light text-lg text-slate-600">credits</p>
                    </div>
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <p className="text-center font-light text-lg text-slate-600">dice</p>
                    </div>
                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <p className="text-center font-light text-lg text-slate-600">name</p>
                    </div>

                    <div className="bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                        <p className="text-center font-light text-lg text-slate-600">twitch chat</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects;