import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import StartGame from "./StartGame";
import TextFieldContainer from "./TextFieldComponent/TextFieldContainer";
function RoutesComponent(){
    return(
        <>
        <Routes>
                <Route path="/Start" element={<StartGame/>}></Route>
                <Route path="/" element={<TextFieldContainer/>}></Route>
        </Routes>
        </>
    )
}
export default RoutesComponent;