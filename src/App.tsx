import React, { useState } from "react";
import "./App.css";

 function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  function searchHandler(event:React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
  };

  function palindrome(): string {
    let string: string = String(searchValue).toLowerCase().replace(/\s/g, '');
    let reverseString = string.split('').reverse().join('');
    if (searchValue === "") {
      return "";
    } else if (string === reverseString) {
      return "This is palindrome!"
    } else {
      return "This is not palindrome!"
    }
  }

  return (
    <>
      <div className="container">
        <div className="inputValue">
          <h1>Palindrome checker App</h1>
          <input id="search"
            type="text"
            value={searchValue}
            placeholder="Enter word or number" onChange={searchHandler} />
          <p>{palindrome()}</p>
        </div>
      </div>
    </>
  );
}

export default App;