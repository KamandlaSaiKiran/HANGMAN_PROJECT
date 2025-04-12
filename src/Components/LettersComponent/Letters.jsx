import HangMan from "../Hangman/Hangman";

// import { useState } from "react";
function Letters({usedLetters,handleLetterClick,step}){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    // const [usedLetters,setUsedLetters]=useState([]);
    // const handleLetterClick = (letter) => {
    //   if (!usedLetters.includes(letter)) {
    //     setUsedLetters([...usedLetters, letter]);
    //   }
    // };
    console.log("Inside the Letters" + usedLetters);
    return(
      <div className="flex justify-between px-4">
      {/* Letters Section (Left Side) */}
      <div className="flex flex-wrap font-marker py-6 w-2/3 gap-2">
        {alphabet.map((letter, index) => {
          const isUsed = usedLetters.includes(letter);
          return (
            <button
              key={index}
              className={`border rounded px-2 py-1 bg-green-500 m-1 basis-1/6 text-center transition ${
                isUsed ? "bg-yellow-300 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
              onClick={() => handleLetterClick(letter)}
              disabled={isUsed}
            >
              {letter}
            </button>
          );
        })}
      </div>
    
      {/* Hangman Section (Right Side) */}
      <div className="flex items-center justify-center w-1/3">
        <HangMan step={step} />
      </div>
    </div>
    
    
    
                
           
    )
}
export default Letters;