import React, { axios , useState} from 'react'
import BookList from './BookList';


const Nav = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };


  return (
    <div>
     <nav className='nav'>
     <div  className="nav1">
           <img src="./logo.PNG" alt="logo" /><h3>KeazoNbooks</h3>
           </div>
           <div  className="nav2"> 
     <input className="search-text" type="text"  placeholder='search...'   value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
     <button className='sbtn'onClick={handleSearch}>Search</button>


     </div>

     <div  className="nav3" > 
     <img src="./lk.PNG" alt="logo" />
     <img src="./bell.PNG" alt="logo" />
     <img src="./daimonD.PNG" alt="logo" />
     <img src="./pp.PNG" alt="logo" />

{/* 
     {searchResults.length > 0 ? (
        <div>
          {searchResults.map((book) => (
            <book key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <BookList />
      )}
     */}
     </div>
     </nav>






    </div>
  )
}

export default Nav