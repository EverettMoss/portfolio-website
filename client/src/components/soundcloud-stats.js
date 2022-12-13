import React from "react";

function Stats() {
    return (
        <>
            <div className='w-full p-5'>
                <h1 className='text-center'>Soundcloud Stats</h1>
            </div>
            
            <div className='grid grid-cols-2 gap-5 p-5'>
            <div>
            <p>I built this project because SoundCloud does not have a way to sort songs by plays, reposts, comments, or likes.
               So, I built a web application that allows me to do this. I created my own API that scrapes xhr requests
               from SoundCloud and returns the data to my frontend. This is where I put the data into a table that has sortable 
               columns. The backend is utlizing free hosting, so the first request takes longer than the ones following.
            </p>
            </div>
            <div>
                <p>Languages used: React, Node, Express</p>
                <p>Styling: TailwindCSS</p>
                <a href='https://soundcloud-profiler.vercel.app/'><p>Link to project</p></a>
            </div>
            </div>
            <p></p>
        </>
    )
}

export default Stats;