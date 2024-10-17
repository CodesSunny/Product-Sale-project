import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import { Link } from "react-router-dom";


const SignIn=()=>{
    return(
        <div className="flex justify-center items-center h-screen bg-white ">
            <form className="min-w-96 bg-gray-200 p-8 rounded-lg flex flex-col gap-[20px] shadow-lg shadow-gray-400 animate__animated animate__zoomIn">
                <label className="flex items-center bg-white rounded-md shadow-md" htmlFor="uname">
                    <i className="ri-user-fill text-2xl text-white py-1 px-2 bg-blue-700 rounded-tl-md rounded-bl-md"></i>
                    <input className="p-2 rounded-md" placeholder="Username" type='text' id='uname'required/>
                </label>
                <label className="flex items-center bg-white rounded-md shadow-md" htmlFor="pw">
                    <i className="ri-lock-fill text-2xl text-white py-1 px-2 bg-blue-700 rounded-tl-md rounded-bl-md"></i>
                    <input className="p-2 rounded-md" placeholder="password" type='password' id='pw' required/>
                </label>
                <button className='bg-cyan-500 hover:bg-cyan-600 w-fit px-4 py-2 rounded mx-auto text-white text-lg font-bold'>Sign In</button>
                <p className='text-gray-600 mx-auto'>Not an existing user?<Link to="/sign-up"><span className='text-blue-500 hover:text-blue-800 hover:underline font-semibold mx-1'>Sign Up</span></Link></p>
            </form>
        </div>
    )
}

export default SignIn