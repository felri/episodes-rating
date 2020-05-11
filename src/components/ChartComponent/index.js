import React from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  ScatterChart,
  Bar,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

import './style.css'

const tollTip = (item) => {
  return (
    item.payload.length > 0 ?
      <div className="container-tooltip">
        <div className="container-tooltip-title">{item.payload[0].payload.title}</div>
        <div className="container-tooltip-season">Season: {item.payload[0].payload.season} Epsiode: {item.payload[0].payload.episode}</div>
        <div className="container-tooltip-score">Rating:
          <span>
            {parseFloat(item.payload[0].payload.imdbrating).toFixed(2)}
          </span>
        </div>
        <div className="container-tooltip-message">Click to open on IMDB</div>
      </div>
      : null
  )
}

export const AreaChartComponnent = function ({ item, onClick }) {
  return (
    item.episodes.length > 0 &&
    <ResponsiveContainer width='100%' height={400}>
      <AreaChart data={item.episodes} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} onClick={onClick} >
        <Area dot={false} name="Rating" type="monotone" dataKey="imdbrating" stroke="#8884d8" fill="rgba(135, 131, 216, 0.2)" />
        <Tooltip content={tollTip} />
        <CartesianGrid stroke="#ccc" strokeDasharray="0 3" />
        <XAxis />
        <YAxis domain={[0, 10]} />
      </AreaChart>
    </ResponsiveContainer >
  );
}

export const ScatterChartComponnent = function ({ item, onClick }) {
  return (
    item.episodes.length > 0 &&
    <ResponsiveContainer width='100%' height={400}>
      <ScatterChart data={item.episodes} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <Scatter onClick={onClick} lineType="fitting" line name="Rating" type="monotone" dataKey="imdbrating" stroke="#8884d8" fill="#8884d8" />
        <Tooltip content={tollTip} />
        <CartesianGrid stroke="#ccc" strokeDasharray="0 3" />
        <XAxis />
        <YAxis domain={[0, 10]} />
      </ScatterChart>
    </ResponsiveContainer >
  );
}

export const BarChartComponnent = function ({ item, onClick }) {
  return (
    item.episodes.length > 0 &&
    <ResponsiveContainer width='100%' height={400}>
      <BarChart data={item.episodes} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} onClick={onClick} >
        <Bar name="Rating" type="monotone" dataKey="imdbrating" stroke="#8884d8" fill="rgba(135, 131, 216, 0.2)" />
        <Tooltip content={tollTip} />
        <XAxis />
        <YAxis domain={[0, 10]} />
      </BarChart>
    </ResponsiveContainer >
  );
}

