import React,{useState} from 'react';
import SearchResult from './SearchResult';
import './css/search.css'

export default function Search() {
  const [scan, setscan] = useState("")
  const InputEvent=(event)=>{
    const data = event.target.value
    setscan(data)
  }
  return (
  <>
  <div className="search-box">
    <input type="text" value={scan} onChange={InputEvent}/>
  <SearchResult result = {scan}/>
  </div>
  </>
  )
}
