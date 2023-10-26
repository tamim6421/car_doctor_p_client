import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const {createUser} = useContext(AuthContext)

        const handleRegister = event =>{
    
            event.preventDefault()
    
            const form = event.target 
            const name = form.name.value
            const email = form.email.value 
            const password = form.password.value 
            console.log(name,email, password)
    
            createUser(email, password)
            .then( res =>{
                console.log(res.user)
                
            })
            .catch(error =>{
                console.log(error)
            })
        }
    
    return (
        <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="mr-10 w-1/2">
              
             <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
  
              <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-3xl text-orange-500 text-center font-bold">Register</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                  <button className="btn bg-orange-400 btn-primary">Register</button>
                </div>
              </form>
             
                  <h1 className="my-5 text-center">Already Have An Account? <Link to='/login' className="text-orange-500 text-lg font-semibold">Login</Link> </h1>
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;