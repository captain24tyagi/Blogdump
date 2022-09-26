import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
// import ChatIcon from "@mui/icons-material/Chat";

function Header() {
  return (
    <header>
      <h1>
        <ChatIcon className="chat" />
        Blogdump
      </h1>
    </header>
  );
}

export default Header;
