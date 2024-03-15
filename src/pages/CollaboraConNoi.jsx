import React from 'react';
import FullMinimalSection from '../components/FullMinimalSection';
import FullTransparentSection from '../components/FullTransparent';
import logoVuotoNero from '../assets/mouseFollow/logo-sfondo-nero.png';
import sabbia from '../assets/staticSection/grano1.png';
import Navbar from '../components/Navbar';
import headerImage from "../assets/staticSection/collabora1.png";
import logoTransp from '../assets/mouseFollow/CIGtrasparente.png';
import FullBWSection from '../components/FullBWsection';
import logoBianco from '../assets/staticSection/schizzi-oro3.png';
import big1 from '../assets/staticSection/family2.jpg';
import BigImage from '../components/BigImage';
import JustText from '../components/JustText';
import ZoomImg from '../components/ZoomImg';


function CollaboraConNoi() {

  return (
    <div className="" style={{"height":"500rem"}}>
      <Navbar />
      <FullMinimalSection 
        headerImage={headerImage}
        logoTransp={logoTransp}
        title='auctor. Nulla, <br/>fringilla.'
        description='Nulla fringilla congue justo, nec auctor<br/> ante efficitur a. Mauris ac elit <br/>eget quam mattis'
        href='/'
        logoPosition='left-[-40vh] top-[-30vh] w-[110vh]'
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
      <BigImage
        grid='flex'
        background={big1}
        text='text-black'
        button='border border-black text-black progress-button-dark'
        href='/'
        title='Lorem ipsum'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image=''
        opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
        bgOpacity='opacity-90 xl:w-3/4 w-1/6 hidden sm:block'
        translate='xl:translate-x-[10%] xl:w-1/4 w-5/6'
        orientation='left'
        backgroundColor='bg-slate-50'
      />
      <JustText 
        background='bg-black' 
        title='totam rem aperiam, eaque ipsa<br/> quae ab illo inventore' 
        titleClass='text-5xl text-slate-50' 
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad <br/> reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        descriptionClass='text-slate-50'
        buttonClass='border border-slate-50 text-slate-50 progress-button-light'
        buttonText='scopri di più'
        href='/'
      />
      <FullBWSection 
        background='bg-black'
        text='text-slate-50'
        button='border border-slate-50 text-slate-50 progress-button-light'
        href='/'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image={logoBianco}
        opacity='opacity-100'
        translate='xl:translate-x-[80%]'
      />
      <ZoomImg/>
      <JustText 
        background='bg-black' 
        title='totam rem aperiam, eaque ipsa<br/> quae ab illo inventore' 
        titleClass='text-5xl text-slate-50' 
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad <br/> reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        descriptionClass='text-slate-50'
        buttonClass='border border-slate-50 text-slate-50 progress-button-light'
        buttonText='scopri di più'
        href='/'
      />
    </div>
  )
}

export default CollaboraConNoi