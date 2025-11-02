import React from 'react';
import { about, assets } from '../assets/assets';

const About = () => {
  return (
    <>
    <div 
    className="w-full flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-20 " id='about'>      
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-1 under font-light"> Our Brand</span></h1>
            <p className="text-center text-gray-500 max-w-80 mb-8">Passionate About Properties, Dedicated to Your Vision</p>
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
              <img src={assets.brand_img} alt="img not found" className="w-full sm:w-1/2 max-w-lg"/>
              <div className="flex flex-col md:items-start mt-10 text-gray-600">
                <div className="grid grid-cols-2 gap md:gap-10 w-full 2xl pr-28">
                  
                    {about.companyStats.map((elem,id)=>{
                      return(<><div><p key={id} className="text-4xl font-medium text-gary-800">{elem.value}</p>
                      <p>{elem.label}</p></div></>)
                    })}
                    </div>
                    <p className="my-10 max-w-lg">{about.description}</p>
                    <button className="btn bg-blue-500 text-white p-2 w-36 rounded-md hover:bg-black">Learn More</button>          
              </div>
            </div>
    </div>
    </>
  );
}

export default About;
