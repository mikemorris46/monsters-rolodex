import React, { useState, useEffect } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css'

let filteredMonsters = []

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  const handleSearchChange = e => {
    setSearchField(e.target.value)
    const mySearch = e.target.value

    filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(mySearch.toLowerCase())
    )
  }

  const fetchData = async () => {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      let data = await response.json()
      setMonsters(data)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={e => handleSearchChange(e)}
      />
      {filteredMonsters.length > 0 ? (
        <CardList monsters={filteredMonsters} />
      ) : (
        <CardList monsters={monsters} />
      )}
    </div>
  )
}

export default App
