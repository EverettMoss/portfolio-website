import React from "react";

function Navbar() {
    return (
        <>
            <nav class="flex items-center justify-between flex-wrap bg-cyan-700 p-6">
                <div class="flex items-center flex-shrink-0 text-amber-400 mr-6">
                    <a href="/">
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQF0V7zw3iLitQ/profile-displayphoto-shrink_400_400/0/1663130816427?e=1675296000&v=beta&t=I2FM0tzFNYblvXyVtV5OzBVzLeW2nTWqzHxsVaY0Fws" className="h-6 mr-3 sm:h-9 rounded-full" alt="Profile" />
                    </a>

                </div>

                <div class="block md:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-slate-50 border-slate-50 hover:text-amber-400 hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
                    <div class="text-sm md:flex-grow">

                    </div>

                    <div>
                        <a href="/" class="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            Home
                        </a>
                        <a href="/projects" class="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            Projects
                        </a>
                        <a href="https://github.com/EverettMoss" target='_blank' rel="noreferrer" class="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/everettmoss/" target='_blank' rel="noreferrer" class="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            LinkedIn
                        </a>
                        <a href="/about" class="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            About
                        </a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;