import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
    const axiosPublic = useAxiosPublic()
    // const [menus, setMenus] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenus(data)
    //         setLoading(false)
    //     })
    // },[])
    const {data: menus = [], isLoading:loading, refetch}= useQuery({
        queryKey: ['menus'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })
    return [menus, loading, refetch]
};

export default useMenu;