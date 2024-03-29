import React from "react";
interface ISearchProps{
  name:string,
  handleChangeName:(e: React.ChangeEvent<HTMLInputElement>)=>void,
  checkEnter:(e:React.KeyboardEvent<HTMLInputElement>)=>void,
  handleSearch:()=>void
}
export const SearchForm = ({name,handleChangeName,checkEnter,handleSearch }:ISearchProps) => {
 
  return (
    <div className="search">
      <label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleChangeName}
          onKeyDown={checkEnter}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
