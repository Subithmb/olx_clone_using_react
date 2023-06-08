import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../../store/Context';

function Header() {
  const{user}=useContext(AuthContext)
  const{firebaseApp}=useContext(FirebaseContext)
  const navigate=useNavigate()

const handleSignout=()=>{
  const auth = getAuth(firebaseApp);

  signOut(auth)
    .then(() => {
      // Sign out successful
      navigate('/login');
    })
    .catch((error) => {
      // An error occurred while signing out
      console.log(error);
    });
}

const sellProduct=()=>{
 
  navigate('/create');
}

const loginUser=()=>{
  
  navigate('/login');
}
const loadHome=()=>{
  navigate('/');
}

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={loadHome} className="brandName">
          <OlxLogo ></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
       {user && <span >Welcome {user.displayName}</span>}
       {!user && <span onClick={loginUser}>Login</span>}
          <hr />
        </div>
        {user&&<span className='logout' onClick={handleSignout}>logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus ></SellButtonPlus>
            <span onClick={sellProduct}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
