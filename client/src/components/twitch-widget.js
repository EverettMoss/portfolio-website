import React from "react";

function TwitchWidget() {
    return (
        <>
            <div className='w-full p-5'>
                <h1 className='text-center font-semibold'>Twitch Widget</h1>
            </div>

            <div className='grid grid-cols-2 gap-5 p-5 font-light'>
                <div>
                    <p>
                        Many viral twitch clips have a live chat widget on the screen. I thought it would be cool to see this on a streamer 
                        who doesn't have an active chat. So this widget allows the streamer to put the chat of any streamer on their screen.
                    </p>
                </div>
                <div className="">
                    <p>Languages used: HTML, CSS, JS</p>
                    <a href='https://github.com/EverettMoss/Twitch-Chat-Widget' target='_blank' rel="noreferrer" className="hover:text-amber-400 font-semibold"><p>Source Code</p></a>
                </div>
            </div>
            <p></p>
        </>
    )
}

export default TwitchWidget;