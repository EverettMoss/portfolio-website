import React from "react";

function Rewind() {
    return (
        <>
            <div className='w-full p-5'>
                <h1 className='text-center font-semibold'>Apple Music Rewind</h1>
            </div>

            <div className='grid grid-cols-2 gap-5 p-5 font-light'>
                <div>
                    <p>
                        Originally when I built this application, there was no way of seeing end of the year listening stats on Apple Music. Luckily,
                        Apple allows users to request a a copy of their data, and one of the files contains all listening data. The first iteration of
                        this project was built using Python outputting the infomation to the terminal. I then created a flask website that displayed 
                        the data on a webpage. After settling on this solution for a couple years I decided to completely refactor the project in react and
                        adding the feature to drag and drop your own data to the website. If you would like demo this, you can download the sample csv in the 
                        GitHub repository.
                    </p>
                </div>
                <div className="">
                    <p>Languages used: React</p>
                    <p>Libraries used: moment, papaparse, chart.js</p>
                    <p >Styling: TailwindCSS</p>
                    <a href='/music-rewind' className="hover:text-amber-400 font-semibold"><p>Link to project</p></a>
                    <a href='https://github.com/EverettMoss/' target='_blank' rel="noreferrer" className="hover:text-amber-400 font-semibold"><p>Source Code</p></a>
                </div>
            </div>
        </>
    )
}

export default Rewind;