import React, { useState } from "react";

const InputForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("please Enter something");
      return;
    } else {
      const resp = await fetch("http://localhost:8000/api/v1/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: inputValue,
        }),
      });
      const result = await resp.json();
      console.log(result);

      console.log("Submitted:", inputValue);
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="flex gap-1.5">
          <input
            id="inputField"
            type="text"
            className="border py-1 px-2 w-full rounded-sm"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here..."
          />
          <button
            type="submit"
            className="bg-blue-500 cursor-pointer text-white py-1 px-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
