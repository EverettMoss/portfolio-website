import React from "react";

function Dice() {
    return (
        <>
            <div className='w-full p-5'>
                <h1 className='text-center font-semibold'>Dice Game</h1>
            </div>

            <div className='grid grid-cols-2 gap-5 p-5 font-light'>
                <div>
                    <p>Fun dice game I created that I translated to js. <br />
                        Rules: The way you win the game is by rolling
                        the same value on each dice simultaneously
                        if you don't roll the same value on the first roll,
                        then you have the amount of tries equal to
                        the smaller value to get the larger value.
                    </p>
                </div>
                <div className="">
                    <p>Languages used: HTML, CSS, JS</p>
                    <a href='/' target='_blank' rel="noreferrer" className="hover:text-amber-400 font-semibold"><p>Link to project</p></a>
                </div>
            </div>
            <p></p>
        </>
    )
}

export default Dice;