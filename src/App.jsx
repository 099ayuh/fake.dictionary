import React from 'react'
import Search from './Search';
import TopComponent from './TopComponent'
// https://api.dictionaryapi.dev/api/v2/entries/en/
const App = () => {
  return (
    <div className='main_Container'>
      <TopComponent />
      <Search />
    </div>
  )
}

export default App;
