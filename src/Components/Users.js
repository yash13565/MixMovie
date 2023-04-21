import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getUsers from "../Redux/Action/GetUsers";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import style from './Search.module.css'
const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log(users);
  return (
    <>
    <div className={style.nav}>
        <Navbar/>
    </div>
      <div>
        hii
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};
export default Users;
