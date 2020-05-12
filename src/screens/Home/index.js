import React from 'react';
import SearchBarHome from 'components/SearchBarHome'
import Footer from 'components/Footer'
import { fetchArrayTvshows, getSuggestions } from 'utils/api'
import { useHistory } from "react-router-dom";

import './style.css'

function Home(props) {
  const [search, setSearch] = React.useState('')
  const [arrayTvshows, setArrayTvshows] = React.useState([])
  const [suggestions, setArraySuggestions] = React.useState([])
  const [filteredArrayTvshows, setFilterArrayTvshows] = React.useState([])

  const history = useHistory()

  const filterArray = search => {
    const filteredArray = arrayTvshows.filter(f => f.title.toLowerCase().includes(search.toLowerCase()))
    if (filteredArray.length > 15) {
      const first10Items = filteredArray.filter((f, i) => i < 15)
      setFilterArrayTvshows(first10Items)
    } else setFilterArrayTvshows(filteredArray)
  }

  const handleSearchChange = e => {
    setSearch(e.target.value)
    if (e.target.value.length >= 3 && arrayTvshows.length > 0) filterArray(e.target.value)
    else setFilterArrayTvshows([])

  }

  const onBlur = () => {
    setFilterArrayTvshows([])
  }

  const onFocus = () => {
    if (search.length >= 3 && arrayTvshows.length > 0) filterArray(search)
  }

  const clickSearchIcon = () => {
    if (search.length >= 3) {
      onClickShowName({ title: search })
    }
  }

  const onKeyDown = e => {
    if (e.key === 'Enter' && search.length >= 3) {
      onClickShowName({ title: search })
    }
  }

  const onClickShowName = item => {
    history.push(`/chart/${item.title.split(' ').join('+')}`)
  }

  React.useEffect(() => {
    const getArrayTvShows = async () => {
      const dataList = await fetchArrayTvshows()
      if (dataList.length > 0) setArrayTvshows(dataList)
      const dataSuggestions = await getSuggestions()
      if (dataSuggestions.length > 0) setArraySuggestions(dataSuggestions)
    }
    getArrayTvShows()
  }, [])

  return (
    <div className="container-home">
      <SearchBarHome
        suggestions={suggestions}
        value={search}
        onKeyDown={onKeyDown}
        clickSearchIcon={clickSearchIcon}
        handleChange={handleSearchChange}
        filteredArray={filteredArrayTvshows}
        onBlur={onBlur}
        onClickShowName={onClickShowName}
        onFocus={onFocus}
      />
      <Footer />
    </div>
  );
}

export default Home;