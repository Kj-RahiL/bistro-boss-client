import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    // console.log(user)
    const link = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order/salad'>Order</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li><Link to='/dashboard/cart' >
            <button className="flex justify-center gap-2">
                <FaCartPlus></FaCartPlus>
                <div className="badge badge-secondary text-white">+{cart.length}</div>
            </button>
        </Link></li>
        <li><a>Item 3</a></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('logout successfully')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className=" normal-case text-xl">Bistro Boss <br /> Restaurant </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link onClick={handleLogout} to='/' className="btn btn-outline text-white">Logout</Link> :
                        <Link to='/login' className="btn btn-outline text-white">Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;