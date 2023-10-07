import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im'; 
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter,FaInstagram } from 'react-icons/fa6';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 mb-6 space-y-3'>
                <h2 className="text-3xl font-bold">
                    Login With :
                </h2>
                <button className="mt-3 btn btn-outline w-full">
                <FcGoogle className="inline-block mr-2" />
                Sign in with Google
                </button>
                <button className="
                w-full
                btn-outline
                mt-3 btn mb-2">
                <ImGithub className="inline-block
                 mr-2" />
                Sign in with Github
                </button>

            </div>
            <div className='p-4 mb-6 '>
                <h2 className="text-3xl mb-4 font-bold">
                    Find Us On :
                </h2>
                <a href='' className='p-4 flex items-center text-lg
                border rounded-t-lg
                '>
                    <FaFacebookF className="inline-block mr-5" />
                   <span>Facebook</span>

                </a>
                <a href='' className='p-4 flex items-center text-lg
                border-x 
                '>
                    <FaTwitter className="inline-block mr-5" />
                   <span>Twitter</span>

                </a>
                <a href='' className='p-4 flex items-center text-lg
                border rounded-b-lg
                '>
                    <FaInstagram className="inline-block mr-5" />
                   <span>Instagram</span>

                </a>
                

            </div>
           {/* q zone */}
           <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;