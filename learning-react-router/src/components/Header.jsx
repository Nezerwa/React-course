import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans"></Link>
        </nav>
      </Link>
    </header>
  );
}
export default Header