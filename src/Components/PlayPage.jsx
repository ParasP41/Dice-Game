import React, { useState } from 'react'
import { initFlowbite } from 'flowbite'
export default function PlayPage() {
    const [rules, setRules] = useState(false);
    const [rulesText, setRulesText] = useState("Show");
    const [score, setScore] = useState(0);
    const [randomNumber, setRandomNumber] = useState()
    const [number, setNumber] = useState(0)
    const [error, setError] = useState();
    const handlerDiceRoll = () => {
        const rn = Math.floor(Math.random() * 6) + 1;
        if (number === 0) {
            setError("Please choose a number!");
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
        else {
            if (randomNumber === number) {
                setScore(score + 2);
                setRandomNumber(null);
                        
            }
            else {
                setScore(score - 2);
                setRandomNumber(rn);
            }
        }
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
            <p className='text-xl mx-4 my-4 text-red-700' >{error}</p>
            <div className='flex items-center my-9 justify-between'>
                <div className="mx-6">
                    <p className='text-4xl md:text-center font-bold'>{number}</p>
                    <p className='text-2xl font-semibold'>Your Choice</p>
                </div>
                <div className='mx-6'>
                    <h1 className='text-4xl md:text-center font-bold'>{score}</h1>
                    <p className='text-2xl font-semibold'>Total Score</p>
                </div>
                <div>
                    {[1, 2, 3, 4, 5, 6].map(function (item) {
                        return (
                            <button type="button" onClick={() => { setNumber(item) }} className="text-black md:ml-3  border-solid border-2 border-black  bg-white  hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm md:px-6 px-4 md:py-5 py-3 me-2 mb-2">{item}</button>
                        )
                    })}
                    <p className='mx-1 md:text-center text-[17px] font-semibold md:font-bold md:text-xl'>Enter the Number</p>
                </div>
            </div>
            <div className="flex items-center my-9 justify-center flex-col">
                <div>
                    {randomNumber ? <img onClick={handlerDiceRoll} src={`./images/dice_${randomNumber}.png`} alt="" /> : <img onClick={handlerDiceRoll} src="./images/dice_1.png" alt="" />}
                </div>
                <p className='font-semibold text-xl'>Click On The Dice to Roll</p>
                <button type="button" onClick={handlerScore} className="text-black w-[14rem] my-4 bg-white border-solid border-2 border-black  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-9 py-3 me-2 mb-2">Reset Score</button>
                <button type="button" onClick={handlerRules} className="text-white w-[14rem] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-9 py-3 me-2 mb-2">{rulesText} Rules</button>
                <button type="button" className="text-white w-[14rem] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-9 py-3 me-2 mb-2"><a href="/play-now">Restart Game</a></button>
            </div>
            {rules && <div className="block  p-5 bg-red-100 border md:w-[45rem] mx-6 border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">How to play dice game</h5>
                <p className="font-normal text-gray-700">Select any number</p>
                <p className="font-normal text-gray-700">Click on dice image</p>
                <p className="font-normal text-gray-700">after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
                <p className="font-normal text-gray-700">if you get wrong guess then  2 point will be dedcuted </p>
            </div>}
        </>
    )
}