import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setnewsOf } from '../../Redux/NewsSlice';
function Navbar() {
  const dispatch=useDispatch();
  function handleClick(e){
    console.log(e.target.textContent);
    dispatch(setnewsOf(e.target.textContent))
  }
  return (
    <div className='navbar center'>
        <div className="navbar-box center">
          <div className="logo center btn"><Link className='lnk' to='/'>NEWS FR</Link></div>
            
            <div className="nav-menu center">
                <ul className='nav-list'>
                    <Link to='/card'><li className='nav-item btn' onClick={handleClick}>Science</li></Link>
                    <Link to='/card'><li className='nav-item btn' onClick={handleClick}>Technology</li></Link>
                    <Link to='/card'><li className='nav-item btn' onClick={handleClick}>Business</li></Link>
                    <Link to='/card'><li className='nav-item btn' onClick={handleClick}>Entertainment</li></Link>
                  
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar