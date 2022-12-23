import React from "react";
//import ReactLogo from './logo.svg'

function Projects() {
    return (
        <>
            <div className="w-screen h-screen bg-zinc-100">
                <div className="grid grid-cols-3 gap-4 p-5">

                    <a href="/soundcloud">
                        <div className="relative bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                            <p className="text-center font-light text-lg text-slate-600">soundcloud stats</p>

                            <div class="absolute bottom-0 left-0 p-2 font-light text-sm">
                                <p>react, node, express</p>
                            </div>
                        </div>
                    </a>

                    <a href="/rewind-info">
                        <div className="relative bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                            <p className="text-center font-light text-lg text-slate-600">music</p>

                            <div class="absolute bottom-0 left-0 p-2 font-light text-sm">
                                <p>react</p>
                            </div>
                        </div>
                    </a>

                    <a href="/album-credits">
                        <div className="relative bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                            <p className="text-center font-light text-lg text-slate-600">album credits</p>

                            <div class="absolute bottom-0 left-0 p-2 font-light text-sm">
                                <p>react, node, express</p>
                            </div>
                        </div>
                    </a>

                    <a href="/dice-info">
                        <div className="relative bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                            <p className="text-center font-light text-lg text-slate-600">dice</p>

                            <div class="absolute bottom-0 left-0 p-2 font-light text-sm">
                                <p>html, js</p>
                            </div>
                        </div>
                    </a>

                    <a href="/names">
                        <div className="relative bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                            <p className="text-center font-light text-lg text-slate-600">name</p>

                            <div class="absolute bottom-0 left-0 p-2 font-light text-sm">
                                <p>node, express</p>
                            </div>
                        </div>
                    </a>

                    <a href="/twitch-widget">
                        <div className="relative bg-slate-50 border-zinc-200 border-2 h-48 rounded shadow-md">
                            <p className="text-center font-light text-lg text-slate-600">twitch chat</p>

                            <div class="absolute bottom-0 left-0 p-2 font-light text-sm">
                                <p>html, js</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </>
    )
}

export default Projects;