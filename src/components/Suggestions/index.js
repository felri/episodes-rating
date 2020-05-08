import React from 'react';
import loadingGif from 'assets/imgs/loading.gif'
import './style.css'

const Item = ({ item, onClickShowName }) => {
  return (
    <div className="container-suggestion-item" onMouseDown={onClickShowName}>
      <div className="container-suggestion-image" style={{ background: `url(${item.poster}), url(${loadingGif})` }} />
      <div className="container-suggestion-title">
        {item.title}
      </div>
    </div>
  )
}


export default function ({ suggestions, onClickShowName }) {
  return (
    <div className="container-suggestions">
      {(suggestions || []).map(item => <Item key={item.id} item={item} onClickShowName={() => onClickShowName(item)} />)}
    </div>
  );
}

