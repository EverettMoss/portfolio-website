import React from "react";

function PortfolioInfo() {
    return (
        <>
            <div className='w-full p-5'>
                <h1 className='text-center font-semibold'>Portfolio Website</h1>
            </div>

            <div className='grid grid-cols-2 gap-5 p-5 font-light'>
                <div>
                    <p>This website was built entirely from scratch using tailwind to style the pages and create layouts. 
                       Additonally, this site has a responsive  design and most of the projects can be demoed in directly!
                    </p>
                </div>
                <div className="">
                    <p>Languages used: React & Tailwind</p>
                    <a href='https://github.com/EverettMoss/portfolio-website' target='_blank' rel="noreferrer" className="hover:text-amber-400 font-semibold"><p>Link to project</p></a>
                </div>
            </div>
            <p></p>
        </>
    )
}

export default PortfolioInfo;