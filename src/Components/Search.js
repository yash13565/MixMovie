import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../redux/action/users";
import { Link } from "react-router-dom";
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
      <input onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <br />
      Go to movie page <Link to="/">Movie Page</Link>
    </>
  );
}
