import React from 'react';
import ResultsTvshows from 'components/ResultsTvshows'
import Suggestions from 'components/Suggestions'
import { SearchSvg } from 'assets/svg'
import LogoPng from 'assets/imgs/logo-name.png'
import './style.css'

const Logo = () => (
  <div className="container-logo-searchbar-home">
    <img src={LogoPng} alt="logo" />
  </div>
)


export default function ({
  value,
  handleChange,
  filteredArray,
  onBlur,
  onFocus,
  clickSearchIcon,
  onKeyDown,
  onClickShowName,
  suggestions
}) {
  return (
    <div className="main-container-searchbar-home">
      <input
        className="container-searchbar-input"
        placeholder="Search for a tv show..."
        onKeyDown={onKeyDown}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <div className="container-searchsvg" onClick={clickSearchIcon}>
        <SearchSvg width={30} height={30} />
      </div>
      <ResultsTvshows filteredArray={filteredArray} onClickShowName={onClickShowName} />
      <Logo />
      <Suggestions suggestions={suggestions} onClickShowName={onClickShowName} />
    </div>
  );
}

