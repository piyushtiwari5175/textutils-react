import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState('enter the text here');

    const handleUpText = () => {
        console.log('upper case' + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to Uppercase Letters","success");
    }

    const handleCopy = () => {
        console.log('Copy-text' + text);
        navigator.clipboard.writeText(text);
        props.showAlert("copied to Clipboard ","success");
    }

    const handleLoText = () => {
        console.log('Lower Case' + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to Lowercase Letters","success");
    }

    const handleclearText = () => {
        setText('');
        props.showAlert("Cleared the Letters","success");
    }

    const handleOnChange = (event) => {
        console.log('on change');
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary mx-2" onClick={handleUpText}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoText}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleclearText}>Clear</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>Your Text Summary</h1>
            <p>{text.trim() !== "" ? text.split(/\s+/).filter(word => word !== "").length : 0} words, {text.length} characters </p>
            <p>{text.trim() !== "" ? 0.008 * text.split(/\s+/).filter(word => word !== "").length : 0} Minutes Read </p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Type something in above text box to preview it here"}</p>
        </div>

        </>
    );
}
