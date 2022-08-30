import Chart from "../src/components/chart"
import Header from "../src/components/header"
import Menu from "../src/components/menu"
import Table from "../src/components/table"

import 'bulma/css/bulma.min.css';
import './App.css'

import database from "./assets/data.json";

function manipulateData(){

  database.forEach(element => {
    element['deltaCapacidadeAtendimento'] = Number((element.capacidade-element.atendimentoRealizado).toFixed(2));

    var [day, month, year] = element.data.split('-');
    element.data = new Date(+year, month-1, +day);
  });

  database.sort(function(a, b){return ((a.data - b.data))});

  database.forEach(element =>{
    element.data = element.data.toDateString()
  });
}

manipulateData();

function App() {
  
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Header/>
      <div className="mainContainer">
        <Menu/>
        <div className="content">
          <Chart database={database}/>
          <Table database={database}/>
        </div>
      </div>
    </>
  );
}

export default App;
