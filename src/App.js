import './App.css'
import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBar from './components/search-bar/search-bar.component'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setMonsters(data)
    }

    fetchMonsters()
  }, [searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value
    setSearchField(searchFieldString.toLowerCase())
  }

  const filtered = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField)
  })

  return (
    <div className="App">
      <h1 className="app-title">Monsters</h1>
      <SearchBar onChangeSearch={onSearchChange} />
      <CardList monsters={filtered} />
    </div>
  )
}

export default App
