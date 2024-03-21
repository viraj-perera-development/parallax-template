import React, { useEffect, useRef } from 'react';
import MinimalSection from '../components/MinimalSection';
import MouseFollow from '../components/MouseFollow';
import ballerina from '../assets/staticSection/family8.jpg';
import ballerina2 from '../assets/staticSection/ballerina1.png';
import Navbar from '../components/Navbar';
import JustText from '../components/JustText';
import mountainVideo from "../assets/mouseFollow/Hero.mp4";
import logoTransp from '../assets/mouseFollow/CIGtrasparente.png';
import { SlArrowDown } from 'react-icons/sl';
import Footer from "../components/Footer";
import image1 from "../assets/staticSection/sede_crop2.jpg";
import image2 from "../assets/staticSection/prodotto5.png";
import Static1 from '../components/Static1';
import FullMinimalSection from '../components/FullMinimalSection';


function HomePage() {



  const nextSectionRef = useRef(null);

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="" data-aos="fade-in" data-aos-duration="2000">
      <Navbar />
        <div className='relative z-20 h-dvh overflow-hidden bg-black'>
              <video data-aos="fade-in" data-aos-duration="2000" className="absolute top-0 left-0 w-full h-full object-cover" style={{ transform: 'scale(1.2)' }} autoPlay muted playsInline loop>
                  <source src={mountainVideo} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          <div className="absolute top-0 left-0 bg-black bg-opacity-30 w-full h-full">
                  {/* Adjust the image to be more to the right and cover 100vh without stretching */}
                  <img src={logoTransp} data-aos="fade-in" data-aos-duration="3000" className='opacity-30' style={{ position: 'absolute', right: '-60vh', height: '150vh', objectFit: 'contain' }} alt='logo careisgold' />
              <div className="absolute bottom-0 left-0 text-left p-10 md:p-32"
                  data-aos="fade-up"
                  data-aos-duration="3000"
              >
                  <h2 className="text-7xl text-white font-semibold">L'Oro per tutti, <br/>prima di tutti.</h2>
                  <p className="text-xl mt-4 text-white">La prima azienda a rendere l'Oro da investimento<br/> accessibile a ogni famiglia.</p>
              </div>
              <SlArrowDown 
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                  onClick={scrollToNextSection} 
                  className='arrow cursor-pointer hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-50 text-5xl' />
          </div>
      </div>
      <div ref={nextSectionRef}>
      </div>
      <MinimalSection
        orientation='right' 
        background='bg-slate-50' 
        title='eritatis et quasi beatae dicta.' 
        titleClass='text-5xl'
        description={`
        <p class='font-medium my-9 text-xl text-neutral-500 uppercase'> quasi architecto beatae vitae dicta sunt explicabo.</p> <p class="font-normal tracking-wide text-pretty text-neutral-500 text-xl mb-16">eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptateme ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo dit aut fugit, sed quiavoluptatem sequi nesciunt. Neque porro at voluptatem. Ut enim ad minima veniam, quis nostrum</p>
        `}
        descriptionClass=''
        buttonClass='border border-black text-black progress-button-dark'
        buttonText='scopri di più'
        href='/collabora-con-noi'
        imageUrl={ballerina2}
        imgOpacity="opacity-80"
        strength='0.14'
        lerp='0.30'
      />
      <FullMinimalSection 
        headerImage={image1}
        logoTransp=''
        title='auctor. Nulla, <br/>fringilla.'
        description='Nulla fringilla congue justo, nec auctor<br/> ante efficitur a. Mauris ac elit <br/>eget quam mattis'
        href='/azienda'
        logoPosition='left-[-40vh] top-[-30vh] w-[110vh]'
      />
      <MinimalSection 
        orientation='left' 
        background='bg-black' 
        title='illum dolorem eum fugiat nulla' 
        titleClass='text-5xl text-slate-50' 
        description={`
        <p class='font-semibold my-9 text-xl text-neutral-500 uppercase'>ex ea commodi consequatur?</p> <p class="font-normal tracking-wide text-pretty text-neutral-500 text-xl mb-16">amet, consecteted  labore et um exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        `}
        descriptionClass='text-slate-50'
        buttonClass='border border-slate-50 text-slate-50 progress-button-light'
        buttonText='scopri di più'
        href='/notizie'
        imageUrl={ballerina}
        imgOpacity="opacity-60"
        strength='0.14'
        lerp='0.30'
      />
      <FullMinimalSection 
        headerImage={image2}
        logoTransp=''
        title='auctor. Nulla, <br/>fringilla.'
        description='Nulla fringilla congue justo, nec auctor<br/> ante efficitur a. Mauris ac elit <br/>eget quam mattis'
        href='/prodotti'
        logoPosition='left-[-40vh] top-[-30vh] w-[110vh]'
      />
      <Footer/>
    </div>
  )
}

export default HomePage