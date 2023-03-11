import {Component} from 'react'
import './search-box.styles.css'

class SearchBar extends Component {
    render (){
        return (
            <input
            className='search-box'
            type="search"
            name="search"
            placeholder="Search Monster here..."
            onChange= {this.props.onChangeSearch}
          ></input>
        )
    }
}


export default SearchBar