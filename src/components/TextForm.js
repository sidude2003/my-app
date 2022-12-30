import React, { useState } from "react";

export default function TextForm(props) {
  //Uppercase
  const handleUpClick = () => {
    console.log("handleUpClick button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  //Lowercase
  const handleDoClick = () => {
    console.log("handleDoClick button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  //On change
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter any text");
  return (
    <>
      <div className="container mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnChange}
          value={text}
        ></textarea>
        <button className="btn btn-primary my-4" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleDoClick}>
          Lowercase
        </button>
      </div>
      <div className="container my-4">
        <h1>Text Summary</h1>
        <p>
          Words: {text.split(" ").length} Characters: {text.length}{" "}
        </p>
      </div>
      <div className="container">
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
