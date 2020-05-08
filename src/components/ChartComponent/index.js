import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

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
      </div>
      : null
  )
}

export default function ({ item }) {
  return (
    item.episodes.length > 0 &&
    <ResponsiveContainer width='100%' height={400}>
      <LineChart data={item.episodes} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} onClick={e => console.log(e)} >
        <Line dot={false} name="Rating" type="monotone" dataKey="imdbrating" stroke="#8884d8" />
        <Tooltip content={tollTip} />
        <CartesianGrid stroke="#ccc" strokeDasharray="0 3" />
        <XAxis />
        <YAxis domain={[0, 10]} />
      </LineChart>
    </ResponsiveContainer >
  );
}

