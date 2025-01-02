import React, { useState } from 'react'
import { initFlowbite } from 'flowbite'
export default function PlayPage() {
    const [rules, setRules] = useState(false);
    const [rulesText, setRulesText] = useState("Show");
    const [score, setScore] = useState(0);
    const [randomNumber, setRandomNumber] = useState()
    const handlerDiceRoll = () => {
         const rn= Math.floor(Math.random() * 6) + 1;
         setRandomNumber(rn);
    }

    const handlerScore = () => {
        setScore(0);
    }
    const handlerRules = () => {
        if (rules === true) {
            setRules(false);
            setRulesText("Show");
        }
        else {
            setRules(true);
            setRulesText("Hide");
        }
    }
    return (
        <>
            <div className='flex items-center  my-4 justify-between'>
                <div className='mx-6'>
                    <h1 className='text-4xl text-center font-bold'>{score}</h1>
                    <p className='text-2xl font-semibold'>Total Score</p>
                </div>
                <div>
                    <button type="button" className="text-black ml-3  border-solid border-2 border-black  bg-white  hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-5 me-2 mb-2">1</button>
                    <button type="button" className="text-black ml-3  border-solid border-2 border-black  bg-white  hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-5 me-2 mb-2">2</button>
                    <button type="button" className="text-black ml-3  border-solid border-2 border-black  bg-white  hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-5 me-2 mb-2">3</button>
                    <button type="button" className="text-black ml-3  border-solid border-2 border-black  bg-white  hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-5 me-2 mb-2">4</button>
                    <button type="button" className="text-black ml-3  border-solid border-2 border-black  bg-white  hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-5 me-2 mb-2">5</button>
                    <button type="button" className="text-black ml-3  border-solid border-2 border-black  bg-white  hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-5 me-2 mb-2">6</button>
                </div>
            </div>
            <div className="flex items-center my-9 justify-center flex-col">
                {randomNumber ? <img  onClick={handlerDiceRoll} src={`./images/dice_${randomNumber}.png`} alt="" />:<img onClick={handlerDiceRoll} src="./images/dice_1.png" alt="" />}
                <p className='font-semibold text-xl'>Click On The Dice to Roll</p>
                <button type="button" onClick={handlerScore} className="text-black w-[14rem] my-4 bg-white border-solid border-2 border-black  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-9 py-3 me-2 mb-2">Reset Score</button>
                <button type="button" onClick={handlerRules} className="text-white w-[14rem] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-9 py-3 me-2 mb-2">{rulesText} Rules</button>
            </div>
            {rules && <div className="block  p-6 bg-red-100 border w-[45rem] mx-6 border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">How to play dice game</h5>
                <p className="font-normal text-gray-700">Select any number</p>
                <p className="font-normal text-gray-700">Click on dice image</p>
                <p className="font-normal text-gray-700">after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
                <p className="font-normal text-gray-700">if you get wrong guess then  2 point will be dedcuted </p>
            </div>}

        </>

    )
}
