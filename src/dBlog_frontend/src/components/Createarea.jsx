import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function Createarea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    writer: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(event.target.name);
    // console.log(event.target.value);
    setBlog((prevBlog) => {
      return {
        ...prevBlog,
        ///name(title/content) mein value daal di
        [name]: value
      };
    });
  }

  function submitBlog(event) {
    props.onAdd(blog);
    setBlog({
      title: "",
      content: "",
      writer: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-blog">
        {isExpanded ? (
          <input
            name="writer"
            onChange={handleChange}
            value={blog.writer}
            placeholder="creator"
          />
        ) : null}

        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={blog.title}
            placeholder="title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={blog.content}
          placeholder="content.."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitBlog}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Createarea;
