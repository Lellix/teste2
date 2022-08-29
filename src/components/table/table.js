function TableData(data) {
  data.map(() => {
    return(
      <div>
        <td>{data.data}</td>
        <td>{data.demanda}</td>
        <td>{data.capacidade}</td>
        <td>{data.atendimentoPlanejado}</td>
        <td>{data.atendimentoRealizado}</td>
        <td>{data.desvio}</td>
      </div>
    )
  })
}

function Table(props) {

    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th><abbr title="data">Data</abbr></th>
              <th><abbr title="demanda">Demanda</abbr></th>
              <th><abbr title="capacidade">Capacidade</abbr></th>
              <th><abbr title="atendimentoPlanejado">Atendimento Planejado</abbr></th>
              <th><abbr title="atendimentoRealizado">Atendimento Realizado</abbr></th>
              <th><abbr title="desvio">Desvio</abbr></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
            <th><abbr title="data">Data</abbr></th>
              <th><abbr title="demanda">Demanda</abbr></th>
              <th><abbr title="capacidade">Capacidade</abbr></th>
              <th><abbr title="atendimentoPlanejado">Atendimento Planejado</abbr></th>
              <th><abbr title="atendimentoRealizado">Atendimento Realizado</abbr></th>
              <th><abbr title="desvio">Desvio</abbr></th>
            </tr>
          </tfoot>
          <tbody>
            {/* {TableData(props.data)} */}
            {props.data.map((data)=>{
              return(
              <>
              <tr>
                <td>{data.data}</td>
                <td>{data.demanda}</td>
                <td>{data.capacidade}</td>
                <td>{data.atendimentoPlanejado}</td>
                <td>{data.atendimentoRealizado}</td>
                <td>{data.desvio}</td>
              </tr>
              </> 
              )
            }
            )}
          </tbody>
        </table>
      </>
    );
  }
  
  export default Table;
  