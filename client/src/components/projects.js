import React from "react";
import ReactLogo from './img/logo.svg'
import NodeLogo from './img/node.png'
import ExpressLogo from './img/Expressjs.png'
import HTMLogo from './img/HTMLogo.png'
import JSLogo from './img/JSLogo.png'

function Projects() {
    return (
        <>
            <div className="w-screen h-screen bg-zinc-100">
                <div className="grid lg:grid-cols-3 gap-4 p-5">

                    <a href="/song-credits">
                        <div className="relative bg-slate-50  h-48 rounded shadow-xl">
                            <p className="text-center font-light text-lg text-slate-600">song credits database</p>

                            <div class="absolute bottom-0 left-0 m-1 w-2/5">
                                <div className="grid grid-cols-4 gap-x-1 items-center">
                                    <img src={ReactLogo} alt='react logo' />
                                    <img src={NodeLogo} alt='node logo' />
                                    <img src={ExpressLogo} alt='express logo' />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="/rewind-info">
                        <div className="relative bg-slate-50  h-48 rounded shadow-xl">
                            <p className="text-center font-light text-lg text-slate-600">apple music rewind</p>

                            <div class="absolute bottom-0 left-0 m-1 w-2/5">
                                <div className="grid grid-cols-4 items-center">
                                    <img src={ReactLogo} alt='react logo' />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="/soundcloud">
                        <div className="relative bg-slate-50  h-48 rounded shadow-xl">
                            <p className="text-center font-light text-lg text-slate-600">soundcloud stats</p>

                            <div class="absolute bottom-0 left-0 m-1 w-2/5">
                                <div className="grid grid-cols-4 gap-x-1 items-center">
                                    <img src={ReactLogo} alt='react logo' />
                                    <img src={NodeLogo} alt='node logo' />
                                    <img src={ExpressLogo} alt='express logo' />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="/names">
                        <div className="relative bg-slate-50  h-48 rounded shadow-xl">
                            <p className="text-center font-light text-lg text-slate-600">Names API</p>

                            <div class="absolute bottom-0 left-0 m-1 w-2/5">
                                <div className="grid grid-cols-4 items-center">
                                    <img src={ReactLogo} alt='react logo' />
                                    <img src={ExpressLogo} alt='express logo' />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="/twitch-widget">
                        <div className="relative bg-slate-50  h-48 rounded shadow-xl">
                            <p className="text-center font-light text-lg text-slate-600">twitch chat widget</p>

                            <div class="absolute bottom-0 left-0 m-1 w-2/5">
                                <div className="grid grid-cols-4 items-center">
                                    <img src={HTMLogo} alt='html logo' className="h-6 w-6" />
                                    <img src={JSLogo} alt='javascript logo' className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="/portfolio-info">
                        <div className="relative bg-slate-50  h-48 rounded shadow-xl">
                            <p className="text-center font-light text-lg text-slate-600">portfolio website</p>

                            <div class="absolute bottom-0 left-0 m-1 w-2/5">
                                <div className="grid grid-cols-4 items-center">
                                    <img src={ReactLogo} alt='react logo' />
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </>
    )
}

export default Projects;