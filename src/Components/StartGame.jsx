
import { useLocation } from "react-router-dom";
import MaskedText from "./MaskedTextComponent/MaskedText";
import { useState } from "react";
import Letters from "./LettersComponent/Letters";
import { useNavigate } from "react-router-dom";

function StartGame(){
  const navigate = useNavigate();
  const location = useLocation();
  const {hint,word} = location.state || {};
  const [step,setStep]=useState(0);
  const [usedLetters,setUsedLetters]=useState([]);
  const [count,setCount]=useState(0)
     const handleLetterClick = (letter) => {
      setCount(count+1);
       if (!usedLetters.includes(letter)) {
         setUsedLetters([...usedLetters, letter]);
        //  setStep(step + 1);
       }if (!word.toUpperCase().includes(letter)) {
        setStep(step+1); // increment wrong guess count
      }
       if(step>=7){
        alert("Game is Over");
        navigate('/');
       }
       const isWordGuessed = word.toUpperCase().split('').every(letter => usedLetters.includes(letter));
       if (isWordGuessed) {
         alert("You have won");
         navigate('/');
       }
     };
 
 


    return(
        <>
        <div className="flex flex-col items-center justify-center">
        
        <h1 className="text-black font-fredoka text-4xl" >Guess the word</h1>
        <h1 className="font-bangers text-5xl bg-slate-500 text-white">HINT: {hint} VALUE:{word}</h1>
        
       
       
        </div>
        <MaskedText word={word} 
        usedLetters={usedLetters}
         />
        <Letters usedLetters={usedLetters} 
        handleLetterClick={handleLetterClick} 
        step={step} />
       
        
        </>
    )


}
export default StartGame;