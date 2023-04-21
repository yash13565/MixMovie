import React from "react";
import style from './Search.module.css'
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Cards({ user }) {
  return (
    <Card
      className={style.maincard}
    >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${user.poster_path}`}
        alt="movie"
      />
      <Card.Body>
        <Card.Title>{user.original_title}</Card.Title>
        <Card.Text style={{ fontWeight: "600" }}>Language Available:- {user.original_language.toUpperCase()}</Card.Text>
        <Card.Text>{user.overview.slice(0, 90) + "...."}</Card.Text>
        {/* Here We have used slice to fix the length of  description  */}
      </Card.Body>
    </Card>
  );
}
