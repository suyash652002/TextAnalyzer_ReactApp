import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here.")
    const handleupclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloclick = () =>
    {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclearclick = () =>
    {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () =>
    {
        var text = document.getElementById("myText")
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const handleonchange = (e) => {
        // console.log("on change called");
        setText(e.target.value);
    }
    return (
        <>
            <div className="container" style={{color: props.mode === "dark"? "white" : "black"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label htmlFor="myText" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" onChange={handleonchange} style={{backgroundColor: props.mode === "dark"? "gray" : "white", color: props.mode === "dark"? "white" : "black"}}
                     value={text} id="myText" rows="8"></textarea>
                    <button className="btn btn-primary mx-2 my-3" onClick={handleupclick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2 my-3" onClick={handleloclick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2 my-3" onClick={handleclearclick}>Clear Text</button>
                    <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>Copy Text</button>


                </div>
            </div>
            <div className="container" style={{color: props.mode === "dark"? "white" : "black"}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                {/* <p>{0.008 * (text.split(" ").length)} Minutes read</p> */}
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
