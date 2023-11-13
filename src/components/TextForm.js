import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked");
        setText(text.toUpperCase());
        props.showAlert("converted to upper case","success")
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked");
        setText(text.toLowerCase());
        props.showAlert("converted to lower case","success")
    }
    const handleRevClick = ()=>{
        console.log("reverse was clicked");
        setText(text.split(" ").reverse().join(" "));
        props.showAlert("converted to reverse sentence","success")
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('enter text here');
    console.log(text.split(" "))
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark' ? 'white' : 'black' }}>
       <h1>{props.heading}</h1>
        <div className="mb-3"  >
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light' ? 'white' : '#161c2f' , color: props.mode ==='dark' ? 'white' : 'black' }}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lower case</button>
        <button className="btn btn-primary mx-1" onClick={handleRevClick}>convert to reverse sentence</button>
    </div>
    <div className="container" style={{color: props.mode ==='dark' ? 'white' : 'black' }} >
      <h1>text summary</h1>
      <p> {(text.charAt(0)==="")? 0:text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008*text.split(" ").length} mins to read them</p>
      <h2>preview</h2>
      <p>{(text.length>0) ?text:"enter something in the textbox above to see preview"}</p>
    </div>

    </>
  )
}
