import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getUsers from "../Redux/Action/GetUsers";
import Navbar from "../Navbar/Navbar";
import style from './Users.module.css'
import Cards from "./MyCards";
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
        <Navbar />
      </div>
      <div className={style.card}>
        {users.results?.map((user) => (
          <Cards key={user.id} user={user} />
        ))}
      </div>
      
    </>
  );
};
export default Users;
