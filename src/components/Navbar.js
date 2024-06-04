import { Link } from "react-router-dom";

function Navbar() {
   return (
      <nav className="banner">
         <div>
            <div id="btn">
               <button>Sign in</button>
               <button>My page</button>
            </div>
         </div>
         <Link to={`/`}>
            <p>MOVIE</p>
         </Link>
      </nav>
   );
}
export default Navbar;
