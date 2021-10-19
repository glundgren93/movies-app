import React from "react";
import { Link } from "react-router-dom";

const ToastWithLink = ({ msg, path }) => {
  return (
    <div>
      {msg}
      <Link to={path}>Check it</Link>
    </div>
  );
};

export default ToastWithLink;
