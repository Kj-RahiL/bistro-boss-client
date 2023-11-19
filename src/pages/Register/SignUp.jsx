
import bgLogin from '../../assets/others/authentication.png'
import sideImage from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogIn from '../../Components/CustomSharedItem/SocialLogIn';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, reset, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user add database')
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };

    
    const boxStyle = {
        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)',
    };
    return (
        <div className="hero min-h-screen bg-base-200" style={{ background: `url(${bgLogin})`, backgroundSize: 'cover', }}>
            <div className="hero-content flex-col lg:flex-row m-8 md:m-20" style={{ ...boxStyle, background: `url(${bgLogin})` }}>
                <div className="text-center lg:text-left">
                    <img src={sideImage} alt="" />

                </div>
                <div className=" flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-5xl font-bold">SIgn Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <p className='text-red-600' role="alert">Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">Email is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 20 })} type="password" name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password  must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password less than 20  characters</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn  text-white bg-[#D1A054] bg-opacity-70" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='divider'>or</div>
                    <SocialLogIn></SocialLogIn>
                    <div className='mb-4'>
                        <p className='text-[#D1A054]  text-center '>
                            Already registered? Go to <Link to='/login' className='text-[#68502b] font-medium'
                            >log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;