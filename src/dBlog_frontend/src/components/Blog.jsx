import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Blog(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="blog">
      <h3>{props.writer}</h3>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Blog;
