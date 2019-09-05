import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        type='search'
        className='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}
