

const Navbar = () => {
  return (
    <nav className="w-full h-12 shadow flex items-center 
    justify-around bg-gradient-to-r from-slate-500 via-gray-300
     to-gray-200">
        <div>
            <p className="text-xl font-bold text-white uppercase
             ">olufemi<span className="text-orange-600"></span></p>
        </div>


        <div>
            <a href="" className="me-4 hover:underline
            hover:text-white">Home</a>
            <a href="" className="me-4 hover:underline
            hover:text-white">About</a>
            <a href="" className="me-4 hover:underline
            hover:text-white">Products</a>
            <a href="" className="me-4 hover:underline
            hover:text-white">Testimonials</a>
            <a href="" className="me-4 hover:underline
            hover:text-white">Contacts</a>
        </div>
        
        <div>
         <button className="py-1 px-4 rounded-full
          hover:animate-bounce hover:bg-gray-800 hover:text-white">Register</button>
         <button className="py-1 px-4 rounded-full
          hover:animate-bounce hover:bg-gray-800 hover:text-white">Login</button>
        </div>
    </nav>
  )
}

export default Navbar
