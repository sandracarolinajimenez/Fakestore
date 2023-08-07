import './App.css'
import DashboardHOC from './Dashboard'
import { useState } from 'react'
import { SearchBar } from './components/SearchBar/SearchBar'
import { SearchResultsList } from './components/SearchBar/SearchResultsList'

function App () {
  const [results, setResults] = useState([])
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <DashboardHOC />
    </div>
  )
}

export default App
