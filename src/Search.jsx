import React,{useState} from 'react'
import Content from './Content'
import './Search.css'
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const searchKeyword = (event) => {
    event.preventDefault()
    setKeyword(event.target.searchBox.value)
  }
  return (
    <div className='container'>
      <form onSubmit={searchKeyword} id='search'>
        <input type="text" name='searchBox' placeholder='Search for any word...'/>
        <button type='submit' className='btn'> <span className='fas fa-search'></span></button>
      </form>
      {keyword? <Content data={keyword}/> : ""}
    </div>
  )
}

export default Search
