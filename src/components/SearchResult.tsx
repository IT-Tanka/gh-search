import React from 'react'
import { IResult } from '../App';

interface ResultProps{
  result:IResult[]
}

const SearchResult = ({result}: ResultProps) => {
  return (
    <ul>
      {result?.map((res) =>{
        return(
          <li className='result' key={res.id}>  
            <span>{res?.name} </span>        
            <a
              className="App-link"
              href={res?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              >{res?.html_url}
            </a> 
          </li>
        )}
      )}
      </ul>
  )
}

export default SearchResult