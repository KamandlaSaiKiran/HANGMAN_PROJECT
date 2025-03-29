import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import PlayGame from "../PlayGame";
function TextField({ onChange,onChangeButton ,ButtonText}) {
    console.log("onChange function in child:", onChange); // Debugging: Check if function is received

    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-4">
            <label className="text-4xl font-semibold pr-2 transition-all transform hover:scale-x-50 hover:bg-green-400">:Enter a Word:</label>
            <input
                className=" border-4 border-yellow-400 bg-white text-4xl transition-all text-red-600 hover:border border-yellow-800"
                type={ButtonText}
                // value={value}
                onChange={onChange} // ✅ Ensure this is properly set
                placeholder="Enter a word to start"
            />
            {/* <p>Typed Value: {value}</p> ✅ Display the value */}
            <button onClick={onChangeButton} 
            className="border border-solid text-black font-semibold px-1 py-1 rounded-md bg-orange-600">
            {ButtonText=='password'?"Show":"Hide"}
            </button>  
            <label className="text-4xl text-white font-semibold pr-2 transition-all transform hover:scale-x-50 hover:bg-green-400">:Enter a Hint:</label>
            <input
                className=" border-4 border-yellow-400 bg-white text-4xl transition-all text-red-600 hover:border border-yellow-800"
                onChange={onChange} // ✅ Ensure this is properly set
                placeholder="Enter the Hint to Guess"
            />
             <button  
            className="border border-solid text-black font-semibold px-1 py-1 rounded-md bg-orange-600">
                <Link to "/Start">Start the Game</Link>
            </button> 
            </div>


            <Routes>
                <Route path="/Start" element={<PlayGame/>}></Route>
            </Routes>
        </>
    )
}

export default TextField;
