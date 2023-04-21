import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../Redux/Action/GetUsers";
import style from './Search.module.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cards from "./MyCards";
export default function SearchField() {
  const { users } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  function handleSearch() {
    dispatch(getSearch(search));
  }
  console.log(users);
  return (
    <>
    <div className={style.nav}><Navbar/></div>
    <div className={style.maininput}>
      <input onChange={(e) => setSearch(e.target.value)} />
      
     <div > <button className={style.btn} onClick={handleSearch}>Search</button></div>
     </div>
     <div className={style.card}>{users.results?.map((user)=> <Cards  key={user.id} user={user}/>)}</div>
      <div>
        <Footer/>
      </div>
    </>
  );
}
