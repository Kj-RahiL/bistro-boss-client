import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit , reset} = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async(data) => {
        console.log(data)
        const imageFile = { image: data.file[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const category = data.category.toLowerCase()
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    }

    return (
        <div>
            <SectionTitle heading='ADD AN ITEM' subHeading="What's new?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold">Recipe name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Recipe name" className="input input-bordered" />
                    </div>
                    <div className="flex">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="text-xl font-semibold">Category*</span>
                            </label>
                            <select defaultValue="default" {...register("category")} className="select select-bordered w-full max-w-xs">
                                <option disabled value='default'>Select Recipe Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soups</option>
                                <option>desserts</option>
                                <option>drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="text-xl font-semibold">Price</span>
                            </label>
                            <input {...register("price", { required: true })} type="text" name="price" placeholder="Price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold">Recipe Details*</span>
                        </label>
                        <textarea {...register("details", { required: true })} className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>
                    </div>

                    <div className="form-control">
                        <input {...register("file", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <div className=" mt-6">
                        <button className="btn btn-outline text-white bg-[#D1A054]"> Add Items <FaUtensils></FaUtensils></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;