import { Link } from 'react-router-dom'

const Header=()=>{
    return(
        <div className='bg-black p-8'>
            <nav className=" text-white flex justify-between items-center text-lg">
                {/* Add navigation links */}
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/sign-in">Sign In</Link>
            </nav>
        </div>
    )
}

export default Header