import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import bgLogin from '../../assets/others/authentication.png'
import sideImage from '../../assets/others/authentication2.png'
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
  
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e=> {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error=>console.error(error))
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }


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
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type here" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            {/* apply disabled for re captcha */}
                            <button disabled={false} className="btn text-white bg-[#D1A054] bg-opacity-70">Login</button>
                        </div>
                        <div>
                            <p className='text-[#D1A054] text-center'>New here? Create a <Link to='/signUp' className='text-[#68502b] font-semibold'
                            >New Account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;