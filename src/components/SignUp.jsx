import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

const SignUp=()=>{
    const[gender,setGender]= useState("male")

    const handleGender=(e)=>{
        setGender(gender==="male" ? "female" : "male")
    }

    return(
        <div className="flex justify-center items-center h-screen bg-white ">
            <form className="min-w-96 bg-gray-200 p-8 rounded-lg flex flex-col gap-[20px] shadow-lg shadow-gray-400 animate__animated animate__zoomIn">
                <h1 className="text-center text-2xl mb-2"> Registration </h1>
                <hr className="border-b-lime-200 border-2 mb-6"/>
                <label className="flex items-center bg-white rounded-md shadow-md" htmlFor="name">
                    <i className="ri-user-smile-line text-2xl text-white py-1 px-2 bg-blue-700 rounded-tl-md rounded-bl-md"></i>
                    <input className="p-2 rounded-md" placeholder="Name" type='text' id='name' required/>
                </label>
                <label className="flex items-center bg-white rounded-md shadow-md" htmlFor="uname">
                    <i className="ri-user-fill text-2xl text-white py-1 px-2 bg-blue-700 rounded-tl-md rounded-bl-md"></i>
                    <input className="p-2 rounded-md" placeholder="Username" type='text' id='uname'required/>
                </label>
                <label className="flex items-center bg-white rounded-md shadow-md" htmlFor="email">
                    <i className="ri-mail-fill text-2xl text-white py-1 px-2 bg-blue-700 rounded-tl-md rounded-bl-md"></i>
                    <input className="p-2 rounded-md" placeholder="email" type='email' id='email' required/>
                </label>
                <label className="flex items-center bg-white rounded-md shadow-md" htmlFor="pw">
                    <i className="ri-lock-fill text-2xl text-white py-1 px-2 bg-blue-700 rounded-tl-md rounded-bl-md"></i>
                    <input className="p-2 rounded-md" placeholder="password" type='password' id='pw' required/>
                </label>
                <section className='flex gap-8 text-lg justify-center'>
                    <label>
                        <input 
                        className='bg-blue-700' type='radio'
                        checked={gender==="male"}
                        onChange={handleGender}
                        /> Male
                    </label>
                    <label>
                        <input
                         className='bg-rose-700' type='radio'
                         checked={gender==="female"}
                         onChange={handleGender}
                         /> Female
                    </label>
                </section>
                <button className='bg-cyan-500 hover:bg-cyan-600 w-fit px-4 py-2 rounded mx-auto text-white text-lg font-bold'>Sign Up</button>
                <p className='text-gray-600 mx-auto'>Already had an account?
                    <Link to="/sign-in">
                        <span className='text-blue-500 hover:text-blue-800 hover:underline font-semibold mx-1'>Sign In</span>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default SignUp