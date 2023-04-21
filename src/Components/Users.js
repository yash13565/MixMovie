import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./MyCards";
import getUsers from "../redux/action/users";
import { Link } from "react-router-dom";
import { getSearch } from "../redux/action/users";
const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
//   const [search, setSearch] = useState("");

//   function handleSearch() {
//     dispatch(getSearch(search));
//   }
  console.log(users);
  return (
    <>
      <div>This is popular movie page</div>
      go to search <Link to="/search">Search</Link>
    </>
  );
};
export default Users;
