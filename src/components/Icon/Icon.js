import "material-design-icons/iconfont/material-icons.css";
import "./Icon.css";
import React from "react";

const Icon = ({ iconName, onClickHandler, title }) => {
  return (
    <i title={title} className="material-icons" onClick={onClickHandler}>
      {iconName}
    </i>
  );
};

export default Icon;
