import { Link } from "react-router-dom";
function StartGame(){
    return(
        <h1 className="flex justify-center underline text-red-500"><Link to='/play'>Start the Game</Link></h1>
    )
}
export default StartGame;