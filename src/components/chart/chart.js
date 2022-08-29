import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "./chart.css"

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="50%">
        <BarChart
          data={this.props.data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis dataKey=""/>
          <Tooltip />
          <Legend />
          <Bar data={this.props.demanda} fill="#8884d8" />
         </BarChart>
      </ResponsiveContainer>
    );
  }
}
