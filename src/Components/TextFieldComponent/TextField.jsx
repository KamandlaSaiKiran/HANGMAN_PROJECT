import { Link } from "react-router-dom";
import StartGame from "../StartGame";

function TextField({value, onChange,onChangeButton,onChangeHint,ButtonText,Hintvalue,checkValues,checkValidation}) {
    console.log("onChange function in child:", onChange); // Debugging: Check if function is received
    console.log(onChangeHint);
    console.log(Hintvalue);
    console.log(checkValues);
    console.log("The value passed is " + value);
   
    return (

        <>
            <div className="py-12">
            <div className="flex flex-col items-center justify-center space-y-4">
            <label className="text-4xl text-white font-caveat font-semibold pr-2 transition-all transform hover:scale-x-50 hover:bg-green-400">Enter a Word</label>
            <input
                className=" border-4 border-yellow-400 bg-white text-2xl transition-all text-red-600 hover:border border-yellow-800"
                type={ButtonText}
                onChange={onChange} // ✅ Ensure this is properly set
                placeholder="Enter a word to start"
            />
            {/* <p>Typed Value: {value}</p> ✅ Display the value */}
            <button onClick={onChangeButton} 
            className="border border-solid text-black font-semibold px-1 py-1 rounded-md bg-orange-600">
            {ButtonText=='password'?"Show":"Hide"}
            </button>  
            <label className="text-4xl font-fredoka text-white font-semibold pr-2 transition-all transform hover:scale-x-50 hover:bg-green-400">Enter a Hint</label>
            <input
                className=" border-4 border-yellow-400 bg-white text-2xl transition-all text-red-600 hover:border border-yellow-800"
                onChange={onChangeHint} // ✅ Ensure this is properly set
                placeholder="Enter the Hint to Guess"
            />
            <button 
            onClick={checkValidation}
           className="border border-solid text-black font-semibold px-1 py-1 rounded-md bg-orange-600"
              >
               {value && Hintvalue ? (
               <Link to="/Start" state={{ hint: Hintvalue,word:value }}>Start the Game</Link>
                 ) : (
                         "Start the Game"
                )}
            </button> 
            </div>
            
            </div>
           
           
            
        </>
    )
}

export default TextField;
