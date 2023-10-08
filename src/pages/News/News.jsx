import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/navbar/navbar";


const News = () => {
    const {id}=useParams();
    const news=useLoaderData();
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">

                <h2 className="text-5xl">News
                Details
                </h2>
                {
                    news.map(item=>item._id===id && <div key={item._id}>
                        <h2 className="text-3xl my-10">{item.title}</h2>
                        <figure>
                            <img src={item.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p>{item.details}</p>
                        </div>
                    </div>)

                }
                </div>

                <div>
                <RightSideNav />

                </div>
            </div>
            
            
        </div>
    );
};

export default News;