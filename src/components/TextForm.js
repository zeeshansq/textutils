import React, {useState} from 'react'   
export default function TextForm(props) {
const [text,setText] = useState("");
const handleUpper = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
}
const handleLower = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
}
const handleClear = ()=>{
    setText("");
}
const handleCopy = () => {
    navigator.clipboard.writeText(text); 
}
const handleRemoveExtra = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}

const handleOnChange = (event)=>{
    setText(event.target.value);
}
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpper}>Convert to UPPERCASE</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLower}>Convert to lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleRemoveExtra}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
    </>
  )
}
