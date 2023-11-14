// SearchResults.js
import React, { useEffect,useState } from 'react';
import { useLocation,NavLink,useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    // Handle state data
    console.log('Search Results:', state.searchResults);
  }, [state]);
  const navigate=useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const handleBuyNow = () => {
    const token = localStorage.getItem("token");
    console.log('Handle Buy Now called');
    if (!token) {
      setShowLoginPopup(true);
      alert('Please Login First to continue with purchase!!!')    
    navigate(0);
    return false;
    } else {
      showLoginPopup('')
      console.log('Handle Buy Now called222222222222');
    }
  };
  return (
    <div>
      <div>
      <h2 style={{textAlign:'center',fontSize:'22pt'}}>Search Results</h2>
      {state.searchResults && state.searchResults.length > 0 ? (
        <ul className='cards'>
          {state.searchResults.map((result) => (
            <li key={result.id}><div className='box1'><img src={result && result.bollywoodimg} alt={result.name} className='subImg' />
            <p className='name' >{result.name}</p> 
            <p className='price' >Price: ₹ {result.price}</p> 
            <p className='rating' >Rating: {result.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{result.rating_stars}</span></p> 
            <NavLink to={`/detail/${result.id}`} > 
            <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
            </div></li>
          ))}
        </ul>
      ) : (
        <p style={{textAlign:'center',fontSize:'25pt'}}>No results found.</p>
      )}
    </div>
    </div>
  );
};

export default SearchResults;
