import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))

    },[])
    return (
        <div>
            <h2 className="text-2xl text-center mb-3">All Categories</h2>
            {
                categories.map(category=>
                <Link className="block mb-2 p-3 text-center text-xl"
                to={`/category/${category.id}`}
                 key={category.id}>
                {category.name}</Link>)
            }
         
        </div>
    );
};

export default LeftSideNav;