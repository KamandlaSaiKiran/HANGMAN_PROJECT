
import { useLocation } from "react-router-dom";
import Letters from "./LettersComponent/Letters";
function StartGame(){
   
    const location = useLocation();
  const hint = location.state?.hint || "No hint provided";
    return(
        <>
        <div className="flex flex-col items-center justify-center">
        
        <h1 className="text-black font-fredoka text-4xl" >Guess the word</h1>
        <h1 className="font-bangers text-5xl bg-slate-500 text-white">HINT: {hint}</h1>
        <span>_</span>
        <span>_</span>
        <span>_</span>
        <span>_</span>
        
        <Letters/>
        </div>
        
        </>
    )


}
export default StartGame;