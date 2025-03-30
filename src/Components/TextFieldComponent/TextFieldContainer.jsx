import { useState } from "react";
import TextField from "./TextField";
import StartGame from "../StartGame";

function TextFieldContainer() {
    const [value, setValue] = useState(""); // ✅ Initialize with an empty string
    const [ButtonText,SetButtonText]=useState('password');
    const [Hintvalue,setHintValue]=useState("");
    function onChangeHandler(event) {
        console.log("Input changed:", event.target.value); // Debugging: Check if function is called
        setValue(event.target.value); // ✅ Update state
    }
    function onChangeButton(){
        if(ButtonText=='password'){
            SetButtonText('text')
        }
        else{
            SetButtonText('password')
        }
    }
    function onChangeHint(event){
            const data=event.target.value;
            setHintValue(data)
    }

    return (
        <>
            <TextField 
                onChange={onChangeHandler} // ✅ Ensure this function is passed correctly
                value={value} 
                onChangeButton={onChangeButton}
                ButtonText={ButtonText}
                onChangeHint={onChangeHint}
                Hintvalue={Hintvalue}
            />
           
        </>
    );
}

export default TextFieldContainer;
