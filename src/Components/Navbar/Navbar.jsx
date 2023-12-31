import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const{user, logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then( () => {})
        .catch(error => {
            console.log(error)
        })
    }

  const links = (
    <>
    <li>
    <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
    </li>
    <li>
    <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About
      </NavLink>
    </li>
{
    user?.email? <>
     
     <li>
    <NavLink
        to="/bookings"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        
      >
        Bookings
      </NavLink>
    </li>

    <li><button onClick={handleLogOut}>LogOut</button></li>  

    </>    : <li>
    <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Login
      </NavLink>
    </li>

   

}
    </>
  );



  return (
    <div>
      <div className="navbar h-28 mb-4  shadow-lg bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-24" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Warning</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
