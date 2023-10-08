import Navbar from "../Shared/navbar/navbar";
import {Link} from "react-router-dom";

const Login = () => {
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(e);
        // const email=e.target.email.value;
        // const password=e.target.password.value;
        // console.log(email,password);
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget);
        console.log(form.get('email'));

    }
    return (
        <div>
            <Navbar />
        <div className=" ">
        <h2 className="text-3xl my-10 text-center">Please Login</h2>

        <div className=" mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin}
        className="card-body">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input name="email"
         type="email"
          placeholder="email" 
          className="input input-bordered"
           required />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input name="password"
         type="password" 
         placeholder="password"
          className="input input-bordered"
           required />
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <p>Dont have an account?<Link to="/register">
        Please Register!!!
        </Link></p>
        </div>


        </div>
 
</div>

       
    );
};

export default Login;