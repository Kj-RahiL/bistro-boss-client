import { FaAd, FaAddressBook, FaCalendar, FaEnvelope, FaHome, FaList, FaMagento, FaRandom, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [isAdmin] = UseAdmin()
    const [cart] = useCart()
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'>
                                <FaHome></FaHome>Admin Home
                            </NavLink></li>
                            <li><NavLink to='/dashboard/addItems'>
                                <FaUtensils></FaUtensils> Add Items
                            </NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'>
                                <FaList></FaList> Manage Items
                            </NavLink></li>
                            <li><NavLink to='/dashboard/manageBookings'>
                                <FaAddressBook></FaAddressBook>Manage Bookings
                            </NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'>
                                <FaUser></FaUser> All Users
                            </NavLink></li>
                        </> :
                            <>
                                <li><NavLink to='/dashboard/userHome'>
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'>
                                    <FaCalendar></FaCalendar> Payment History
                                </NavLink></li>
                                <li><NavLink to='/dashboard/review'>
                                    <FaRandom></FaRandom> Review
                                </NavLink></li>
                                <li><NavLink to='/dashboard/cart'>
                                    <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})
                                </NavLink></li>
                            </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to='/'>
                        <FaHome></FaHome>Home
                    </NavLink></li>
                    <li><NavLink to='/menu'>
                        <FaMagento></FaMagento>Menu
                    </NavLink></li>
                    <li><NavLink to='/order/salad'>
                        <FaAd></FaAd>Order
                    </NavLink></li>
                    <li><NavLink to='/contact'>
                        <FaEnvelope></FaEnvelope>Contact
                    </NavLink></li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;