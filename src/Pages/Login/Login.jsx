
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const {sinInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password)

        sinInUser(email, password)
        .then(res =>{
            const loggedInUser = res.user
            console.log(loggedInUser)
            const user = {email};
            

            // get access token 
            axios.post('http://localhost:5000/jwt', user, {withCredentials:
            true})
            .then(data => {
                console.log(data.data)
                if(data.data.success){
                    navigate(location?.state ? location?.state : '/')
                }
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-10 w-1/2">
            
           <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-orange-500 text-center font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
           
                <h1 className="my-5 text-center">New to this site? <Link to='/register' className="text-orange-500 text-lg font-semibold">Register</Link> </h1>
           
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;