import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

export default class Example extends PureComponent {
  
  render() {
    return (
      <div className="chart">
        <h2 className="title">Gráficos</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={this.props.data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis domain={[dataMin => (Math.floor(dataMin/100)*100), dataMax => (Math.ceil(dataMax/100)*100)]}/>
            <ReferenceLine y={0} stroke="#000"/>
            <Tooltip />
            <Legend/>
            <Bar dataKey="deltaCapacidadeAtendimento" fill="#8884d8" name="Delta Capacidade e Atendimentos Realizados"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
