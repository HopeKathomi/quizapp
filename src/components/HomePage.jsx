import { useState } from 'react'

function HomePage ({setStart, name, setName}){

    function handleChange(e){
        setName(e.target.value);
    }

    function handleClick(){
        setStart(false);
    }

    return (
        <div className = 'flex flex-col h-screen items-center justify-center'>
            <p>Enter your name to start the quiz</p>
            <form>
                <input type="text" value={name} onChange={handleChange} className ='border border-gray-500 rounded-xl mt-2 px-3 py-1'/>
            </form>
            <button onClick={handleClick} className="bg-blue-400 px-4 py-1 rounded-md mt-6">Start Quiz</button>
        </div>
    )
}

export default HomePage