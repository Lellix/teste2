import Chart from "../src/components/chart/chart"
import Header from "../src/components/header/header"
import Menu from "../src/components/menu/menu"
import Table from "../src/components/table/table"
import 'bulma/css/bulma.min.css';
import './App.css'
import data from "./assets/data.json";


function App() {

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Header/>
      <div className="mainContainer">
        <Menu/>
        <div className="content">
          <Chart data={data}/>
          <Table data={data}/>
        </div>
      </div>
    </>
  );
}

export default App;
