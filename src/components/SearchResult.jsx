import React from 'react';

export default function SearchResult(props) {
  const img = `https://source.unsplash.com/400x400/?${props.result}`
  return (
  <div className='search-result'>
    <img src={img} alt="result-img" />
  </div>
  )
}
