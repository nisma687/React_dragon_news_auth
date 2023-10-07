import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/navbar/navbar";
import BreakingNews from "./BreakingNews";



const Home = () => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
          
            <div className="grid
            grid-cols-1
             md:grid-cols-3
             gap-6">
                <div className="border">
                <LeftSideNav />
                </div>
                <div>
                <h2 className="text-3xl md:col-span-2 
                border
               ">News Coming soon...</h2>          
                </div>
                <div className="border">
                <RightSideNav />
                </div>
                
            </div>
        </div>
    );
};



export default Home;