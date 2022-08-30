function Table(props) {

    return (
      <>
        <h2 className="title" style={{marginTop: "4%"}}>Tabela</h2>
        <div className="dataTable">
          <table className="table is-scrollable">
            <thead>
              <tr>
                <th><abbr>Data</abbr></th>
                <th><abbr>Demanda</abbr></th>
                <th><abbr>Capacidade</abbr></th>
                <th><abbr>Atendimento Planejado</abbr></th>
                <th><abbr>Atendimento Realizado</abbr></th>
                <th><abbr>Desvio</abbr></th>
              </tr>
            </thead>
            <tbody>
              {props.database.map(dados=>{
                return(
                  <>
                    <tr>
                      <td>{dados.data}</td>
                      <td>{dados.demanda}</td>
                      <td>{dados.capacidade}</td>
                      <td>{dados.atendimentoPlanejado}</td>
                      <td>{dados.atendimentoRealizado}</td>
                      <td>{dados.desvio}</td>
                    </tr>
                  </>
                )
              }
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  
  export default Table;
  