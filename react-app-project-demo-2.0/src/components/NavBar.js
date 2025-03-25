
import { Link } from "react-router-dom";
function NavBar() {
    return (
      <>
          <nav>
            <Link to="/">Home</Link> {" | "}
            <Link to="/about">About</Link> {" | "}
            <Link to="/Page1">Page 1</Link>
          </nav>
      </>
    );
}
 
export default NavBar;