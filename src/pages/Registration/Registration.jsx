import { useContext } from "react";
import Navbar from "../Shared/navbar/navbar";

import {Link} from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";


const Registration = () => {
    const {createUser}=useContext(AuthContext);
    const handleRegistration=(e)=>{
        e.preventDefault();
        console.log(e);
        // const email=e.target.email.value;
        // const password=e.target.password.value;
        // console.log(email,password);
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget);
        const name=form.get('name');
        const photoUrl=form.get('photoUrl');
        const email=form.get('email');
        const password=form.get('password');
        // create a user

        createUser(email,password)
        .then(res=>
            {
                console.log(res.user);
            })
        .catch(error=>{
            console.log(error);
        })
        

    }
    return (
        <div>
            <Navbar />
          
            <div className=" ">
        <h2 className="text-3xl my-10 text-center">Please Register</h2>

        <div className=" mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegistration}
        className="card-body">

        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input name="name"
         type="text"
          placeholder="Your Name" 
          className="input input-bordered"
           required />
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Photo Url</span>
        </label>
        <input name="photoUrl"
         type="text"
          placeholder="Your Photo Url" 
          className="input input-bordered"
           required />
        </div>

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
        
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
        </div>
        </form>
        <p className="text-center mt-4">Already have an account?
        <Link to="/login" className="blue-600">
        Please go to login!!!
        </Link></p>
        </div>


        </div>
            
        </div>
    );
};

export default Registration;