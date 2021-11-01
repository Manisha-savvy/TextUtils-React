import React, {useState} from 'react'

export default function TextForm(props) {
    
    
    const handleUpClick = ()=>{
        console.log("You converted to Upercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to upper case!", "success");

    }
    const handleLoChange = ()=>{
        console.log("You converted to Lowercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to lower case!", "success");
    }

    const handleClear = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text is cleared!", "success");

    }
    
    const handleOnClick = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var textC = document.getElementById('myBox');
        textC.select();
        navigator.clipboard.writeText(textC.value);
        props.showAlert("Text is coppied!", "success");

    }

    const handleRemoveextraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces is removed!", "success");

    }
    
    const [text, setText] = useState('');
    
    return (
        <>
        <div className="container" > 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
                <textarea  className="form-control" id="myBox" value ={text} style={{backgroundColor:` ${props.mode}===light? grey:white`}} onChange={handleOnClick} rows="3" ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoChange}>Convert to Lower</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveextraSpaces}>Convert Text</button>

        </div>
        <div className="container2 my-3">
            <h1 className="my-3">Preview is here</h1>
            <p>{text.split(" ").length - 1} words and {text.length} characters </p>
            <p>{0.08*text.split(" ").length} sec to read the document.</p>
            <p></p>
            <h2>{text}</h2>
        </div>
        </>
    )
}