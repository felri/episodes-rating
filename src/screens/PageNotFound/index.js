import React from 'react';
import { useHistory } from "react-router-dom";

import './style.css'

export default (props) => {
  const history = useHistory()

  React.useEffect(() => {
    history.push('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div />
  );
}

