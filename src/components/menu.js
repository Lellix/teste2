function Menu() {
    return (
      <>
        <aside className="menu sideMenu">
          <p className="menu-label">
            Geral
          </p>
          <ul className="menu-list">
            <li><a>Homepage</a></li>
            <li><a>Dados</a></li>
          </ul>
          <p className="menu-label">
            Administração
          </p>
          <ul className="menu-list">
            <li><a>Demandas</a></li>
            <li><a>Atendimentos Planejados</a></li>
            <li><a>Atendimentos Realizados</a></li>
          </ul>
        </aside>
      </>
    );
  }
  
export default Menu;
  