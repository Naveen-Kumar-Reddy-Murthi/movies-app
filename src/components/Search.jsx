import { useState } from 'react'
import { useGlobalContext } from '../Context.jsx'
import { Badge, Switch } from 'evergreen-ui'
const Search = () => {
  const { setSearchTerm, setOtherSearch, setAdultFilter } = useGlobalContext();
  const [text, setText] = useState('')
  const [filter, setFilter] = useState(true)
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setAdultFilter(filter);
    if (text) {
      setSearchTerm(text)
      setText('')
    }
  }

  const handleOtherSearch = (e) =>{
   e.preventDefault();
    setAdultFilter(filter);
    if(e.target.value){
      setOtherSearch(e.target.value)
    }
  }

  return <header className='search-container'>
    <form onSubmit={handleSubmit}>
     <label>
        <div className="flexbox-container">
       <Badge color="blue" >Adult Filter</Badge>
       <Switch style={{ marginLeft: '1rem', align: 'center' }} height={24} checked={filter} onChange={() => setFilter(!filter)} />
          </div>
      </label>
      <input type='text' onChange={handleChange} value={text} placeholder='search a movie'
        className='form-input' />
      <button type="submit" className='btn'>Search</button>
      <button type="submit" className='btn' value='popular' onClick={(e)=>handleOtherSearch(e)}>Popular</button>
      <button type="submit" className='btn' value='top'  onClick={(e)=>handleOtherSearch(e)}>Top Rated</button>
    </form>
  </header>

}

export default Search