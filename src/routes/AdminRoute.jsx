import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";
import { Children } from "react";
import useAuth from "../hooks/useAuth";

const AdminRoute = () => {
   const {user, loading} = useAuth()
   const [isAdmin, isAdminLoading]= UseAdmin()
   const location = useLocation()

   if(loading || isAdminLoading){
    return <progress className="progress w-56"></progress>
   }
   if(user && isAdmin){
    return Children
   }
   return <Navigate to='/login' state={{from: location} } replace></Navigate>
};

export default AdminRoute;