import React, { useState } from "react";

function ButtonStateChange() {

  //const [numberState , setNumberState] = useState(1)
  const [buttonText , setButtonText] = useState("Click here")


  return (
   
         <button
        onClick={() => {
          if (buttonText === "click here") {
            setButtonText("clicked");
          } else {
            setButtonText("stop clicking");
          }
        }}
      >
        {buttonText}
      </button>
  );
}

export default ButtonStateChange;
