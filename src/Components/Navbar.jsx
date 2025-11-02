import React, { useEffect, useState } from 'react';
import { assets } from './../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[showMobileMenu,setShowMobileMenu]=useState(false)
  useEffect(() => {
  if (showMobileMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  return () => (document.body.style.overflow = 'auto');
}, [showMobileMenu]);

  return (
    <div className="w-full bg-gray-900">
        <div className="container p-10 flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 ">
            <img src={assets.logo} alt="img not found" />
            <ul className="hidden md:flex gap-7 text-gray-400">
                <Link to="/" className=" hover:text-white  p-4 font-mono">Home</Link>
                <Link to="/about" className="hover:text-white  p-4 font-mono">About</Link>
                <Link to="/projects" className="hover:text-white p-4 font-mono">Projects</Link>
                <Link to="/testimonials" className="hover:text-white  p-4 font-mono">Testimonials</Link>
            </ul>
            {/* Mobile Menu Icon (right end)Hamburger */}
            <img src={assets.menu_icon} alt="img not found" className="md:hidden w-7 cursor-pointer" onClick={()=>setShowMobileMenu(true)}/>
      </div>
      {/* -------mobile view menu---------- */}
      <div  className={`md:hidden ${showMobileMenu ? 'fixed inset-0 w-full z-50' : 'w-0 h-0'} right-0 top-0 ottom-0 overflow-hidden bg-slate-200 transition-all`}>
        <div className="flex justify-end p-6 cursor-pointer">
          {/* Cross button on mobile view */}
          <img src={assets.cross_icon} alt="" className="w-6 " onClick={()=>setShowMobileMenu(false)}/>
        </div>
        <ul className="flex flex-col items-center gap-3 mt-5 text-lg font-medium">
          <a href="#home" onClick={()=>setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block">Home</a>
          <a href="#about" onClick={()=>setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block">About</a>
          <a href="#projects" onClick={()=>setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block">Projects</a>
          <a href="#testimonials" onClick={()=>setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block">Testimonials</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
