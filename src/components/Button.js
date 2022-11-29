import React, { useState } from "react";

function Button() {

  //const [numberState , setNumberState] = useState(1)
  const [buttonText , setButtonText] = useState('Click here')

  let number = 1;

  return (
    <>
    <button
      onClick={() => {
        number = number + 1;
        console.log(number);
      }}
    >
      Button {number}
    </button>

      <button onClick={() => {
        if(buttonText === "click here") {
          setButtonText("clicked")
        }else {
          setButtonText("stop clicking")
        }
      }}>{buttonText}</button>
    </>
  );
}

export default Button;
