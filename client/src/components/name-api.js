import React from "react";

function Names() {
    return (
        <>
            <div className='w-full p-5'>
                <h1 className='text-center font-semibold'>Baby Name API</h1>
            </div>

            <div className='grid grid-cols-2 gap-5 p-5 font-light'>
                <div>
                    <p>
                        I built this project because I needed an API that could return a name by providing a
                        length. Since i couldn't find it, I knew I had to create it. So, I found a website that
                        had baby names in a list and scraped that information and converted it into an API. After 
                        implementing this into my application, I decided to publish it on RapidAPI. The backend is 
                        utlizing free hosting, so the first request takes longer than the ones following.
                    </p>
                </div>
                <div className="">
                    <p>Languages used: Node & Express</p>
                    <a href='https://rapidapi.com/EverettMoss/api/baby-names2/' target='_blank' rel="noreferrer" className="hover:text-amber-400 font-semibold"><p>Link to project</p></a>
                </div>
            </div>
            <p></p>
        </>
    )
}

export default Names;