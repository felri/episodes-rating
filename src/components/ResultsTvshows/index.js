import React from 'react';
import './style.css'

const Item = ({ title, onClickShowName }) => (
  <div className="container-item-title-results" onMouseDown={onClickShowName}>
    {title}
  </div>
)

export default ({ filteredArray, onClickShowName }) => (
  <div className="container-item-results">
    {
      (filteredArray || []).map(item => <Item key={item.id} title={item.title} onClickShowName={() => onClickShowName(item)} />)
    }
  </div>
)

