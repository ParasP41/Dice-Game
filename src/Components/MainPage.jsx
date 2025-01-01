import React from 'react'
// import { Link } from 'react-router-dom'
import { initFlowbite } from 'flowbite'

export default function MainPage() {
    return (
        <>


        <div className="md:flex md:items-center md:mx-9 md:justify-center md:my-10">
            <div className='my-5' >
                <img src="./public/images/dices.png" alt="" />
            </div>
            <div className='flex flex-col m-auto justify-center items-center'>
                <h1 className='text-5xl md:text-8xl font-bold my-4'>DICE GAME</h1>
                <div>
                <button type="button" class="text-white bg-gray-800 md:my-3 hover:bg-gray-900 md:text-xl  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 md:px-6 py-2.5 me-2 mb-2"><a href="/">Play Now</a></button>
                </div>
            </div>
        </div>
        </>
    )
}
