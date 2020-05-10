import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { fetchTvShow } from 'utils/api'
import ClockLoader from "react-spinners/ClockLoader";
import { ErrorSvg, AreaChartSvg, ScatterChartSvg, BarChartSvg } from 'assets/svg'
import Header from 'components/Header'
import Details from 'components/Details'
import { AreaChartComponnent, BarChartComponnent, ScatterChartComponnent } from 'components/ChartComponent'
import './style.css'

const Error = ({ onClick }) => (
  <div onClick={onClick} className="container-error-chart">
    <ErrorSvg width={100} height={100} />
    <div className="container-text-chart-error">
      Show not found, click here and try again
    </div>
  </div>
)

const ContainerIconsChart = ({ handleClick, selected }) => (
  <div className="main-container-icon-chart">
    <div className="container-icon-chart">
      <AreaChartSvg fill={selected === 'area' ? "#8884d8" : "white"} height={50} width={50} onClick={() => handleClick('area')} />
    </div>
    <div className="container-icon-chart">
      <BarChartSvg fill={selected === 'bar' ? "#8884d8" : "white"} height={50} width={50} onClick={() => handleClick('bar')} />
    </div>
    <div className="container-icon-chart">
      <ScatterChartSvg fill={selected === 'scatter' ? "#8884d8" : "white"} height={50} width={50} onClick={() => handleClick('scatter')} />
    </div>
  </div>
)

function Chart(props) {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [item, setItem] = React.useState({})
  const [chartType, setChartType] = React.useState('area')
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

  const handleClick = chart => {
    setChartType(chart)
  }

  return (
    <>
      <Header />

      <div className="container-chart-screen">
        {loading ? <ClockLoader size={100} color={'#34b79f'} /> :
          error ? <Error onClick={() => history.push('/')} /> :
            (item && item.tvshow) && (
              <>
                <ContainerIconsChart selected={chartType} handleClick={handleClick} />
                <div className="container-info-chart-screen">
                  {
                    chartType === 'area' ? <AreaChartComponnent item={item} /> :
                      chartType === 'bar' ? <BarChartComponnent item={item} /> :
                        chartType === 'scatter' ? <ScatterChartComponnent item={item} /> : null
                  }

                  <Details item={item} />
                </div>
              </>
            )
        }
      </div>
    </>
  );
}

export default Chart;