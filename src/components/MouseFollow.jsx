import React, { useRef } from 'react';
import { MouseParallax } from 'react-just-parallax';
import mountainVideo from "../assets/mouseFollow/Hero.mp4";
import logoTransp from '../assets/mouseFollow/CIGtrasparente.png';
import { SlArrowDown } from "react-icons/sl";


function MouseFollow() {

    const nextSectionRef = useRef(null);

    // Function to scroll to the next section
    const scrollToNextSection = () => {
      nextSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

  return (
    <>
    <div className='relative z-20 h-dvh overflow-hidden'>
        <MouseParallax enableOnTouchDevice={true} isAbsolutelyPositioned={true} strength="0.05">
            <video className="absolute top-0 left-0 w-full h-full object-cover" style={{ transform: 'scale(1.2)' }} autoPlay muted playsInline loop>
                <source src={mountainVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </MouseParallax>
        <div className="absolute top-0 left-0 bg-amber-200 bg-opacity-30 w-full h-full">
            <MouseParallax enableOnTouchDevice={true} isAbsolutelyPositioned={true} strength="0.025">
                {/* Adjust the image to be more to the right and cover 100vh without stretching */}
                <img src={logoTransp} className='opacity-30' style={{ position: 'absolute', right: '-60vh', height: '150vh', objectFit: 'contain' }} alt='logo careisgold' />
            </MouseParallax>
            <div className="absolute bottom-0 left-0 text-left p-10 md:p-32"
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <h2 className="text-7xl text-white font-semibold">Italian company, <br/>Swiss gold.</h2>
                <p className="text-xl mt-4 text-white">Explore the beauty of Viraj.</p>
            </div>
            <SlArrowDown 
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                onClick={scrollToNextSection} 
                className='cursor-pointer hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-50 text-6xl' />
        </div>
    </div>
    <div ref={nextSectionRef}>
    </div>
    </>
  );
}

export default MouseFollow;
