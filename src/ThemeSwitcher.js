import React, { useState } from "react";
import "./ThemeSwitcher.css";

function ThemeSwitcher({ initialCheckStatus, onClickHandler }) {
  // stores internal check status
  const [isChecked, setIsChecked] = useState(initialCheckStatus);

  const onClick = (e) => {
    onClickHandler(e);
    setIsChecked((oldStatus) => !oldStatus);
  };

  return (
    <label className="themeSwitcherContainer">
      <input checked={isChecked} onClick={onClick} type="checkbox" />
      <span></span>
    </label>
  );
}

export default ThemeSwitcher;
