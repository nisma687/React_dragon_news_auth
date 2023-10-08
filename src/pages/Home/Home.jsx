import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/navbar/navbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";



const Home = () => {
    const news=useLoaderData();
    console.log(news);
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
          
            <div className="grid
            grid-cols-1
             md:grid-cols-3
             gap-6">
                <div className="">
                <LeftSideNav />
                </div>
                <div>
                 
               {
                news.map(item=><NewsCard
                key={item._id}
                 item={item}>

                </NewsCard>)

               }        
                </div>
                <div className="">
                <RightSideNav />
                </div>
                
            </div>
        </div>
    );
};



export default Home;