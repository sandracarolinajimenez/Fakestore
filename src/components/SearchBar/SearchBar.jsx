import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import './SearchBar.css'

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('')

  const fetchData = (value) => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((title) => {
          return (
            value &&
            title &&
            title.category &&
            title.category.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Escribe para buscar..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
