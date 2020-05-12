import React from 'react';

import './style.css'

export default function ({ item }) {
  const openSite = () => {
    const url = `https://felri.site/`
    window.open(url, '_blank')
  }

  return (
    <div className="container-footer">
      <div className="container-footer-link" onClick={openSite}>
        (Built by <span>Felipe Ribeiro</span>)
      </div>
    </div>
  );
}

