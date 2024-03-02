import React from "react";
import picture from './img/profilepic.png'

const shoot = () => {
    //alert("Great Shot!");
    let element = document.getElementById("main-navbar");
    let hidden = element.getAttribute("hidden");
    
    if (hidden) {
       element.removeAttribute("hidden");
       //button.innerText = "Hide nav";
    } else {
       element.setAttribute("hidden", "hidden");
       //button.innerText = "Show nav";
    }
  }


function Navbar() {
    return (
        <>

            <nav className="flex items-center justify-between flex-wrap bg-cyan-700 p-6">
                <div className="flex items-center flex-shrink-0 text-amber-400 mr-6">
                    <a href="/">
                        <img src={picture} className="h-6 mr-3 sm:h-9 rounded-full" alt="Profile" />
                    </a>

                </div>

                <div className="block md:hidden">
                    <button  onClick={shoot} className="flex items-center px-3 py-2 border rounded text-slate-50 border-slate-50 hover:text-amber-400 hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
                    <div className="text-sm md:flex-grow">

                    </div>

                    <div id="main-navbar" hidden="hidden">
                        <a href="/" className="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            Home
                        </a>
                        <a href="/projects" className="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            Projects
                        </a>
                        <a href="https://github.com/EverettMoss" target='_blank' rel="noreferrer" className="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/everettmoss/" target='_blank' rel="noreferrer" className="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            LinkedIn
                        </a>
                        <a href="/about" className="block mt-4 md:inline-block md:mt-0 text-slate-50 hover:text-amber-400 mx-3 font-medium">
                            About
                        </a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;