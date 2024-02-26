import React from "react";

function Credits() {
    return (
        <>
            <div className='w-full p-5'>
                <h1 className='text-center font-semibold'>Song Credits Database</h1>
            </div>

            <div className='grid grid-cols-2 gap-5 p-5 font-light'>
                <div>
                    <p>
                        I built this project because there was no way to sort artist discographies by a particular producer 
                        or writer. I had to split this project into two parts. The first was a backend built with Node and Express
                        that would take song data using the Genius API and populate a MongoDB collection.
                        
                        The only reliable website that tracked song credits was genius.com. So, I used the genius
                        API populate a MongoDB collection I created with song entries
                        
                        SoundCloud does not have a way to sort songs by plays, reposts, comments, or likes.
                        So, I built a web application that allows me to do this. I created my own API that scrapes xhr requests
                        from SoundCloud and returns the data to my frontend. This is where I put the data into a table that has sortable
                        columns. 

                        The backend is utlizing free hosting, so the first request takes longer than the ones following (~30 sec).
                    </p>
                </div>
                <div className="">
                    <p>Languages used: React, MongoDB, Node, Express</p>
                    <p >Styling: TailwindCSS</p>
                    <a href='https://soundcloud-profiler.vercel.app/' target='_blank' rel="noreferrer" className="hover:text-amber-400 font-semibold"><p>Link to project</p></a>
                    <a href='https://github.com/EverettMoss/soundcloud-profiler' target='_blank' rel="noreferrer" className="hover:text-amber-400 font-semibold"><p>Source Code</p></a>
                </div>
            </div>
        </>
    )
}

export default Credits;