
import './search-box.styles.css'



const SearchBar = ({onChangeSearch})=>
(
    <input
    className='search-box'
    type="search"
    name="search"
    placeholder="Search Monster here..."
    onChange= {onChangeSearch}
  ></input>
)


export default SearchBar