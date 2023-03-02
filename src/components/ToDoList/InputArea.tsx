import React, { useState } from "react";

interface IProp {
  buttonClick: (inputText: string) => void;
}

function InputArea(props: IProp) {
  const [inputText, setInputText] = useState<string>("");

  function handleChange(event: { target: { value: string } }) {
    const newValue = event.target.value;
    // console.log(newValue);
    setInputText(newValue);
    // Store the input
  }

  return (
    <div className="todo-form">
      <input
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.buttonClick(inputText);
            // Press enter to submit
            setInputText("");
          }
        }}
        type="text"
        value={inputText}
      />
      <button
        type="submit"
        onClick={() => {
          props.buttonClick(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
