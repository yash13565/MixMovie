import React from 'react'
import style from './Footer.module.css'
import { BsYoutube } from 'react-icons/bs'
import { TfiTwitter } from 'react-icons/tfi'
import { AiFillFacebook } from 'react-icons/ai'
function Footer() {
  return (
    <>
      <div className={style.firstdiv}>
        <h5>SOCIAL</h5>
        <a href="https://www.facebook.com" target='_blank' rel="noreferrer" ><AiFillFacebook />Facebook</a>
        <a href="https://www.twitter.com" target='_blank' rel="noreferrer" ><TfiTwitter />Twitter</a>
        <a href="https://www.youtube.com" target='_blank' rel="noreferrer" ><BsYoutube />Youtube</a>
        <div>
          <h5>&#169; Aster Digital Private Limited</h5>
        </div>
      </div>
    </>
  )
}

export default Footer