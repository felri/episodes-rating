import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { fetchTvShow } from 'utils/api'
import ClockLoader from "react-spinners/ClockLoader";
import { ErrorSvg } from 'assets/svg'
import Header from 'components/Header'
import Details from 'components/Details'
import ChartComponent from 'components/ChartComponent'
import './style.css'

const Error = ({ onClick }) => (
  <div onClick={onClick} className="container-error-chart">
    <ErrorSvg width={100} height={100} />
    <div className="container-text-chart-error">
      Show not found, click here and try again
    </div>
  </div>
)

function Chart(props) {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [item, setItem] = React.useState({})
  const { search } = useParams()
  const history = useHistory()

  React.useEffect(() => {
    const getTvShow = async search => {
      !loading && setLoading(true)
      const data = await fetchTvShow({ search })
      if (!data || (data && data.Response && data.Response === 'False')) {
        setError(true)
      } else if (data.tvshow) {
        setItem(data)
        setError(false)
      }
      setLoading(false)
    }
    if (!search || search.length < 3) history.push('/')
    else getTvShow(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container-chart-screen">
      <Header />
      {loading ? <ClockLoader size={100} color={'#34b79f'} /> :
        error ? <Error onClick={() => history.push('/')} /> :
          (item && item.tvshow) && (
            <div className="container-info-chart-screen">
              <ChartComponent item={item} />
              <Details item={item} />
            </div>
          )
      }
    </div>
  );
}

export default Chart;