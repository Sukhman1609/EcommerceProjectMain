
import React, { useContext ,useState} from 'react'
import { Store1 } from '../../ContextAPI'
import { NavLink,useNavigate } from 'react-router-dom'
import '../../Styles/Mobile.css'
import Footer from '../../Footer/Footer'
const Iphone15 = () => {
  const[ContextData]=useContext(Store1);
  console.log(ContextData);
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
      console.log('Handle Buy Now called222222222222');
    }
  };
  return (
    <div className='mobileContainer'>
      <div style={{display:'flex',flexDirection:'column',width:"280px"}}>
      <div className='left'>
      <ul>
                  <li style={{color:'coral', fontSize:'25px',fontWeight:'600',textDecoration:'underline', listStyle:'none'}}>Iphones</li>
                  <li><NavLink to="/iphone/iphone15" className='sublist'>Iphone15</NavLink></li>
              <li><NavLink to="/iphone/iphone14" className='sublist'>Iphone14</NavLink></li>
              <li><NavLink to="/iphone/iphone13" className='sublist'>Iphone13</NavLink></li>
              <li><NavLink to="/iphone/iphone12" className='sublist'>Iphone12</NavLink></li>
              <li><NavLink to="/iphone/macbooks" className='sublist'>Macbooks</NavLink></li>
              </ul>
      </div>
      <div className='left1'>
         <img src='https://media4.giphy.com/media/26n79t82lmj989iAE/200w.webp?cid=ecf05e47wb1z6j4xx3r58ug787kv0xq495tok7b5q0ixctpp&ep=v1_gifs_search&rid=200w.webp&ct=g' alt='' style={{height:'500px',width:'220px',marginLeft:'20px',marginTop:'20px'}}/>
      </div>
      </div>

    <div className='bestSellerContainer bestSellerContainer1'>
    <p className='bestSeller'>MOBILES-IPHONE 15</p>
    <hr className='bestSellerHr1'></hr>
<div className='cards1'>
<div className='box1'>
{ContextData.filter((item)=> item && item.id === 32).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
  </div>
  {showLoginPopup && (
        <>
        <div className="popup-message">
          <p> ✅ Login First Please!</p>
          <div className="green-line"></div>
        </div>
         </>
      )}
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 33).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 34).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 35).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           
           </div>)
        })} 
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 36).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 37).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
  <div className=' box1'>
{ContextData.filter((item)=> item && item.id === 38).map((item,index)=>{
          console.log(item);
          return(   <div >
          <img src={item.bollywoodimg} alt={item.name} className='subImg' />
           <p className='name' >{item.name}</p> 
           <p className='price' >Price: ₹ {item.price}</p> 
           <p className='rating' >Rating: {item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p> 
           <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>BUY NOW</button></NavLink>
           </div>)
        })} 
        
  </div>
</div>
</div>
<Footer/>
</div>
  )
}

export default Iphone15