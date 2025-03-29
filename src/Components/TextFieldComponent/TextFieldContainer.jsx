import { useState } from "react";
import TextField from "./TextField";

function TextFieldContainer() {
    const [value, setValue] = useState(""); // ✅ Initialize with an empty string
    const [ButtonText,SetButtonText]=useState('password');
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

    return (
        <>
            <TextField 
                onChange={onChangeHandler} // ✅ Ensure this function is passed correctly
                value={value} 
                onChangeButton={onChangeButton}
                ButtonText={ButtonText}
            />
        </>
    );
}

export default TextFieldContainer;
