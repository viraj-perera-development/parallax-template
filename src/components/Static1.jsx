import React from 'react';
import headerImage from "../assets/staticSection/5.png";
import logoTransp from '../assets/mouseFollow/CIGtrasparente.png';
import { Link } from 'react-router-dom';

function Static1() {
  return (
    <>
      <div className='relative z-20 h-dvh overflow-hidden'>
              <img src={headerImage} alt='header image' className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex justify-center items-center">
                  {/* <img  src={logoTransp}      
                        className="absolute left-[10vh] top-[-0vh] w-[60vh] object-contain"
                        alt='logo careisgold'
                     /> */}
              {/* Text container centered and slightly moved to the right */}
              <div className="absolute text-start ps-15 lg:ps-96 ml-[5%]">
                  <h2 className="text-7xl text-white font-semibold" data-aos="fade-up" data-aos-duration="1000">Italian company, <br/>Swiss gold.</h2>
                  <p className="text-xl mt-4 mb-10 text-white" data-aos="fade-up" data-aos-duration="1000">Explore the beauty of Viraj.</p>
                  <Link to="/" rel='noopener noreferrer' className="progress-button-light px-8 py-2 uppercase border border-slate-50 text-slate-50 transition duration-300 ease-in-out">Scopri di più</Link>
              </div>
          </div>
      </div>
    </>
  );
}

export default Static1;
