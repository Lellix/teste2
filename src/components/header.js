import logo from "./../assets/logo.png"

function Header() {
    return (
      <>
        <nav className="navbar is-black">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src={logo} width="112" height="28"/>
            </a>
          </div>
        </nav>
      </>
    );
  }
  
  export default Header;
  