import React from 'react';
import FullTransparentSection from '../components/FullTransparent';
import logoVuotoNero from '../assets/mouseFollow/logo-sfondo-nero.png';
import sabbia from '../assets/staticSection/grano1.png';
import Navbar from '../components/Navbar';
import Static1 from '../components/Static1';
import headerImage from "../assets/staticSection/forme-oro5.png";
import logoTransp from '../assets/mouseFollow/CIGtrasparente.png';
import JustText from '../components/JustText';
import BigImage from '../components/BigImage';
import big1 from '../assets/staticSection/app1.jpg';


function Faq() {

  return (
    <div className="">
      <Navbar />
      <Static1 
        headerImage={headerImage}
        logoTransp={logoTransp}
        title='error sit voluptatem, <br/>accusantium sit.'
        description='accusantium doloremque laudantium, <br/>accusantium doloremque laudantium, totam rem aperiam,<br/> eaque totam rem aperiam, eaque'
        href='/'
        logoPosition='left-[-40vh] top-[-30vh] w-[110vh]'
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
      <BigImage
        grid='flex'
        background={big1}
        text='text-slate-50'
        button='border border-slate-50 text-slate-50 progress-button-light'
        href='/'
        title='Lorem ipsum'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image=''
        opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
        bgOpacity='bg-black opacity-65 xl:w-3/4 w-1/6'
        translate='xl:translate-x-[10%] xl:w-1/4 w-5/6'
        orientation='right'
      />
      <JustText 
        background='bg-slate-50' 
        title='totam rem aperiam, eaque ipsa<br/> quae ab illo inventore' 
        titleClass='text-5xl text-black' 
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad <br/> reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        descriptionClass='text-black'
        buttonClass='border border-black text-black progress-button-light'
        buttonText='scopri di più'
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
    </div>
  )
}

export default Faq