import React from 'react';
import FullTransparentSection from '../components/FullTransparent';
import FullMinimalSection from '../components/FullMinimalSection';
import logoVuotoNero from '../assets/mouseFollow/logo-sfondo-nero.png';
import logoVuotoBianco from '../assets/mouseFollow/logo-sfondo-bianco.png';
import grano from '../assets/staticSection/prodotto3.png';
import sabbia from '../assets/staticSection/grano1.png';
import Navbar from '../components/Navbar';
import headerImage from "../assets/staticSection/family4.jpg";
import logoTransp from '../assets/mouseFollow/CIGtrasparente.png';
import JustText from '../components/JustText';


function Notizie() {

  return (
    <div className="">
      <Navbar />
      <FullMinimalSection 
        headerImage={headerImage}
        logoTransp=''
        title='ut sapien auctor. <br/>Nulla fringilla.'
        description='Mauris ac elit eget quam mattis<br/> pellentesque eget ut enim. Nunc mollis <br/>vehicula nisl eget sollicitudin.'
        href='/'
      />
      <FullTransparentSection 
        grid='grid grid-cols-1 lg:grid-cols-2'
        background={sabbia}
        text='text-slate-50'
        button='border border-slate-50 text-slate-50 progress-button-light'
        href='/'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image={logoVuotoNero}
        opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
        bgOpacity='bg-black opacity-65'
        translate='xl:translate-x-[10%]'
      />
      <JustText 
        background='bg-slate-50' 
        title='totam rem aperiam, eaque ipsa<br/> quae ab illo inventore' 
        titleClass='text-5xl text-black' 
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad <br/> reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        descriptionClass='text-black'
        buttonClass='border border-black text-black progress-button-dark'
        buttonText='scopri di più'
        href='/'
      />
      <FullTransparentSection 
        grid='grid grid-cols-1 lg:grid-cols-2'
        background={grano}
        text='text-slate-50'
        button='border border-slate-50 text-slate-50 progress-button-light'
        href='/'
        title='Lorem ipsum dolor elit.'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image=''
        opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
        bgOpacity='bg-black opacity-65'
        translate='xl:translate-x-[-10%]'
        backgroundColor='bg-black	'
        orientation="left"
      />
      <JustText 
        background='bg-black' 
        title='totam rem aperiam, eaque ipsa<br/> quae ab illo inventore' 
        titleClass='text-5xl text-slate-50' 
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad <br/> reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        descriptionClass='text-slate-50'
        buttonClass='border border-slate-50 text-slate-50 progress-button-dark'
        buttonText='scopri di più'
        href='/'
      />
    </div>
  )
}

export default Notizie