import React from "react";

function Stats() {
    return (
        <>
            <div className='w-full p-5'>
                <h1 className='text-center font-semibold'>SoundCloud Stats</h1>
            </div>

            <div className='grid grid-cols-2 gap-5 p-5 font-light'>
                <div>
                    <p>
                        I built this project because SoundCloud does not have a way to sort songs by plays, reposts, comments, or likes.
                        So, I built a web application that allows me to do this. I created my own API that scrapes xhr requests
                        from SoundCloud and returns the data to my frontend. This is where I put the data into a table that has sortable
                        columns. The backend is utlizing free hosting, so the first request takes longer than the ones following.
                    </p>
                </div>
                <div className="">
                    <p>Languages used: React, Node, Express</p>
                    <p >Styling: TailwindCSS</p>
                    <a href='https://soundcloud-profiler.vercel.app/' target='_blank' rel="noreferrer" className="hover:text-amber-400 font-semibold"><p>Link to project</p></a>
                    <a href='https://github.com/EverettMoss/soundcloud-profiler' target='_blank' rel="noreferrer" className="hover:text-amber-400 font-semibold"><p>Source Code</p></a>
                </div>
            </div>
        </>
    )
}

export default Stats;