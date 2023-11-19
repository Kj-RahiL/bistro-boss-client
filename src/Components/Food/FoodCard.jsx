import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name, recipe, image, price, _id} = item
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = food =>{
        if(user && user.email){
            // send cart item to databse
            console.log(user.email, food)
            const cartItem ={
                menuId: _id,
                email: user.email,
                name, image, price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    refetch()
                    Swal.fire({
                        position:"top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 2000,
                    })
                }
            })
            // axios.post('http://localhost:5000/carts', cartItem)
            // .then(res=>{
            //     console.log(res.data)
            //     if(res.data.insertedId){
            //         Swal.fire({
            //             position:"top-end",
            //             icon: "success",
            //             title: `${name} added to your cart`,
            //             showConfirmButton: false,
            //             timer: 2000,
            //         })
            //     }
            // })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result)=>{
                if(result.isConfirmed){
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl text-black">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 text-white bg-slate-900 px-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=> handleAddToCart(item)} className="btn text-[#BB8506] border-[#BB8506] border-0 border-b-4 hover:bg-[#111827] hover:border-[#BB8506]">View Full  Menu</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;