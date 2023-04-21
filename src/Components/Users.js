import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import getUsers from "../Redux/Action/GetUsers";
import { Link } from "react-router-dom";
const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log(users);
  return (
    <>
      <div>This is popular movie page</div>
      go to search <Link to="/popular">Search</Link>
    </>
  );
};
export default Users;
