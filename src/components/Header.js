import React from 'react'
import { Link } from 'react-router-dom'
import {SearchOutlined} from '@mui/icons-material'
import {ShoppingBasket} from '@mui/icons-material'
import '../styled/Header.scss'

const Header = () => {
  return (
    <div className="header">
        <nav>
        <ul className="ul-items">
                <li className="li-items">
                    <Link to = '/women'>Women</Link>
                    <Link to = '/men'>Men</Link>
                    <Link to = '/crispin'>Children</Link>
                    <Link to = '/shop' className='orange'>The Gift Shop</Link>
                    <Link to = '/about'>About</Link>
                </li>
            </ul>
            <div className="logo"> 
                <h1>ShopLoVe</h1>
            </div>
            <div className="right">
                <div className="search">
                    <SearchOutlined className= 'search-icon'/>
                    <button className= "sch-btn">Search</button>
                </div>
                <div className="right-buttons">
                    <button>
                        <Link to= "/login">Login</Link>
                    </button>
                    <button>
                        <Link to= "signup">Sign Up</Link>
                    </button>
                    <ShoppingBasket/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header