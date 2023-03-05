import React, { useState } from "react";
import logo from "./icon-github.svg";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import "./App.css";

export interface IResult {
  html_url: string;
  name: string;
  id: number;
}
function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState<Array<IResult>>([]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const checkEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };
  async function handleSearch() {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${name}+in:name `
    );
    if (response.ok) {
      setResult((await response.json()).items);
    } else {
      setResult([]);
    }
  }

  return (
    <div className="App">
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Find repository by name on GitHub</p>
        <SearchForm
          name={name}
          handleChangeName={handleChangeName}
          checkEnter={checkEnter}
          handleSearch={handleSearch}
        />
        <SearchResult result={result} />
        {!result.length && <span>no result</span>}
      </main>
    </div>
  );
}

export default App;
