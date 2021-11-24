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
        document.getSelection().removeAllRanges();
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
                <textarea  className="form-control" id="myBox" value ={text} style={{backgroundColor:`${props.mode}==='dark'? 'grey':'white'`, color:`${props.mode}==='dark'? 'white':'#a3a1a1'`}} onChange={handleOnClick} rows="3" ></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1" onClick={handleLoChange}>Convert to Lower</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1" onClick={handleRemoveextraSpaces}>Convert Text</button>

        </div>
        <div className="container2 my-3">
            <h1 className="my-3">Preview is here</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
            <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} sec to read the document.</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Nothing to preview"}</p> 
        </div>
        </>
    )
}