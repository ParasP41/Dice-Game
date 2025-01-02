import React from 'react'
import { Link } from 'react-router-dom'
import { initFlowbite } from 'flowbite'
export default function MainPage() {
    return (
        <>
            <div className="md:flex md:items-center my-9 md:my-32 md:justify-around ">
                <div>
                    <img src="./images/dices.png" alt="" />
                </div>
                <div className='flex items-center my-9 justify-center flex-col'>
                    <h1 className='md:text-7xl text-5xl text-center my-4 font-bold'>DICE GAME</h1>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-9 py-3 me-2 mb-2"><Link to="play-now">Play Now</Link></button>
                </div>
            </div>
        </>
    )
}
