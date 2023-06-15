import { useState } from "react";

function Form(){
    const [btnDisabled, setbtnDisabled] = useState(1);
    const [text, setText] = useState('');

    function handleOnChange(e) {
        const textValue = e.target.value.trim();
        if(textValue.length) {
            setText(textValue);
            setbtnDisabled(0);
        } else {
            setbtnDisabled(1);
        }
    }

    function handleOnClick() {

    }

    return(
        <>
            <form>
                Current Status - {btnDisabled === 0 ? 'Enable' : 'Disable'}
                <textarea rows={5} onChange={handleOnChange}/>
                {text}
                <button type="submit" disabled={btnDisabled === 0 ? '': 'disabled'} onClick={handleOnClick}> Submit </button>
            </form>
        </>
    )
}

export default Form;