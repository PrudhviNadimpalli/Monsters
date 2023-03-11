
import './App.css'
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component'
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchFeild: '',
    }
  }

  onSearchChange = (event) => {
    const searchFeild = event.target.value
    // eslint-disable-next-line react/no-direct-mutation-state, no-unused-expressions
    this.setState(() => {
      return { searchFeild }
    })
  }

  componentDidMount() {
    const data = [
      { id: 1, name: 'Prudhvi', age: 18 },
      { id: 2, name: 'Revanth', age: 27 },
      { id: 3, name: 'Puja', age: 24 },
      { id: 4, name: 'Charshitha', age: 22 },
      {id:5 ,name :'Surya',age :25},
      {id:6,name:'Keerthi', age:27},
      {id:7, name:"Vinod", age :27},
      {id:8 ,name:"Sateesh",age:27},
      {id:9, name :"Vinathi",age:26}
    ]
    // eslint-disable-next-line react/no-direct-mutation-state
    this.setState(() => (this.state.monsters = data))
  }
  render() {
    const searchData = this.state.searchFeild.toLocaleLowerCase()
    const filtered = this.state.monsters.filter((ele) => {
         return ele.name.toLocaleLowerCase().includes(searchData)
       })
    return (
      <div className="App">
        <h1 className='app-title '>Monsters</h1>
       <SearchBar onChangeSearch ={this.onSearchChange} />
        <CardList monsters ={filtered}/>

      </div>
    )
  }
}

export default App
