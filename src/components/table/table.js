function Table() {
    return (
      <>
        <table class="table">
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
            <tr>
              <th>1</th>
              <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
              </td>
              <td>38</td>
              <td>23</td>
              <td>12</td>
              <td>3</td>
            </tr>
            <tr>
              <th>2</th>
              <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
              <td>38</td>
              <td>20</td>
              <td>11</td>
              <td>7</td>
            </tr>
            <tr>
              <th>3</th>
              <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
              <td>38</td>
              <td>19</td>
              <td>13</td>
              <td>6</td>
            </tr>
            <tr class="is-selected">
              <th>4</th>
              <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
              <td>38</td>
              <td>19</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <th>5</th>
              <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>
              <td>38</td>
              <td>19</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <th>6</th>
              <td><a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a></td>
              <td>38</td>
              <td>18</td>
              <td>9</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  
  export default Table;
  