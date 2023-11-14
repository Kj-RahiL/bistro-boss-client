
import bgLogin from '../../assets/others/authentication.png'
import sideImage from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handSignUp = e =>{
        e.preventDefault()
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
                <form onSubmit={handSignUp} className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
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
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#D1A054] bg-opacity-70">Login</button>
                    </div>
                    <div>
                        <p className='text-[#D1A054]  text-center'>
                            Already registered? Go to <Link to='/login' className='text-[#68502b] font-medium'
                        >log in</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;