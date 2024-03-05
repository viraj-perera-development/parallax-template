import React from 'react';
import { ScrollParallax } from 'react-just-parallax';
import headerImage from "../assets/staticSection/family4.jpg";
import logoTransp from '../assets/mouseFollow/CIGtrasparente.png';
import { Link } from 'react-router-dom';

function FullMinimalSection() {
  return (
    <>
      <div className='relative z-20 h-dvh overflow-hidden'>
          <ScrollParallax enableOnTouchDevice={true} isAbsolutelyPositioned={true} lerpEase="0.05">
              <img src={headerImage} alt='header image' className="absolute top-0 left-0 w-full h-full object-cover" style={{ transform: 'scale(1.2)' }} />
          </ScrollParallax>
          <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full flex justify-center items-center">
              <ScrollParallax enableOnTouchDevice={true} isAbsolutelyPositioned={true} lerpEase="0.08">
                  <img  src={logoTransp}      
                        className="absolute left-[120vh] top-[-70vh] h-[150vh] w-[150vh] object-contain"
                        alt='logo careisgold'
                     />
              </ScrollParallax>
              {/* Text container centered and slightly moved to the right */}
              <div className="absolute text-start ps-15 lg:ps-96 ml-[5%]">
                  <h2 className="text-7xl text-white font-semibold" data-aos="fade-up" data-aos-duration="1000">Italian company, <br/>Swiss gold.</h2>
                  <p className="text-xl mt-4 mb-10 text-white" data-aos="fade-up" data-aos-duration="1000">Explore the beauty of Viraj.</p>
                  <Link to="/" rel='noopener noreferrer' className={`px-8 py-2 progress-button-light uppercase border border-slate-50 text-slate-50 transition duration-300 ease-in-out`}>Scopri di più</Link>
              </div>
          </div>
      </div>
    </>
  );
}

export default FullMinimalSection;
