import React from 'react';
import { useHistory } from "react-router-dom";
import { BackSvg } from 'assets/svg'

import './style.css'

export default function (props) {
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className="header">
      <BackSvg onClick={handleClick} height={50} width={50} fill="white" />
    </div>
  );
}

