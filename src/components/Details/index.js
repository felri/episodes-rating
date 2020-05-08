import React from 'react';
import { ImdbSvg } from 'assets/svg'
import loadingGif from 'assets/imgs/loading.gif'

import './style.css'

const Poster = ({ poster }) => (
  <div className="container-poster-item">
    <div className="container-details-image" style={{ background: `url(${poster}), url(${loadingGif})` }} />
  </div>
)

const Info = ({ item }) => {
  const openImdb = () => {
    const url = `https://www.imdb.com/title/${item.imdbid}`
    window.open(url, '_blank')
  }

  return (
    <div className="container-info-details">
      <div className="container-title-details" onClick={openImdb}>
        <div className="container-title-text">
          {item.title}
        </div>
        <ImdbSvg width={60} />
      </div>
      <div className="container-rating-text">
        Rating: <span>{item.imdbrating}</span>
      </div>
      <div className="container-plot-text">
        {item.plot}
      </div>
    </div>
  )
}

export default function ({ item }) {
  return (
    <div className="container-details-tvshow">
      <Poster poster={item.tvshow.poster} />
      <Info item={item.tvshow} />
    </div>
  );
}

