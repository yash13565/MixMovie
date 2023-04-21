import React from 'react'
import style from './Navbar.module.css'
import {RiMovie2Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className={style.main}>
        <h4><RiMovie2Fill/><Link className={style.link} to='/' >MixMovies</Link></h4>
        <Link className={style.link} to='/popular'>Popular Movies</Link>
    </div>
  )
}

export default Navbar