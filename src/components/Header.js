import React from 'react'
import { Link } from 'react-router-dom'
import {SearchOutlined} from '@mui/icons-material'

const Header = () => {
  return (
    <div className="header">
        <nav>
        <ul className="ul-items">
                <li className="li-items">
                    <Link to = '/women'>Women</Link>
                    <Link to = '/men'>Men</Link>
                    <Link to = '/crispin'>Crispin</Link>
                    <Link to = '/shop'>The Gift Shop</Link>
                    <Link to = '/about'>About</Link>
                </li>
            </ul>
            <div className="logo">
                <h1>ShopLiVe</h1>
            </div>
            <div className="right">
                <div className="search">
                    <SearchOutlined className= 'search-icon'/>
                    <button className= "sch-btn">Search</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header