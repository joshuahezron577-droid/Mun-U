    
    
export default function Navbar() {
  return (
    // Nimeongeza 'mb-0' na 'shadow-none' (kama shadow ndiyo inaleta gap) 
    // na kuhakikisha z-index ni kubwa zaidi
    <div className="navbar bg-base-200 shadow-none sticky top-0 z-[50] min-h-[64px] px-4 md:px-6 lg:px-8">
      <div className="navbar-start pr-4 md:pr-6 lg:pr-8">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
            <li><a href="/">Home</a></li>
            <li><a href="#AboutUs">About Us</a></li>
            <li><a href="#OurTeam">Our Team</a></li>
            <li><a href="#Gallery">Gallery</a></li>
          </ul>
        </div>
        <a href="/" className="flex items-center gap-3 py-2">
          <img src="/Images/Mun-Logo.png" alt="Mun Logo" className="h-10 w-10 object-contain ml-5" />
          <span className="text-xl font-bold tracking-wide">MUN</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4">
          <li><a href="/">Home</a></li>
          <li><a href="#AboutUs">About Us</a></li>
          <li><a href="#OurTeam">Our Team</a></li>
          <li><a href="#Gallery">Gallery</a></li>
        </ul>
      </div>

      <div className="navbar-end pl-4 md:pl-6 lg:pl-8">
        <a href="/login" className="btn btn-primary btn-sm">Login</a>
      </div>
    </div>
  );
}