import React from 'react';
import FullBWSection from '../components/FullBWsection';
import logoNero from '../assets/staticSection/schizzi-oro2.png';
import Navbar from '../components/Navbar';
import Static1 from '../components/Static1';
import BigImage from '../components/BigImage';
import headerImage from "../assets/staticSection/grano2.png";
import logoTransp from '../assets/mouseFollow/CIGtrasparente.png';
import big1 from '../assets/staticSection/family1.jpg';
import JustText from '../components/JustText';



function Prodotti() {

  return (
    <div className="">
      <Navbar />
      <Static1 
        headerImage={headerImage}
        logoTransp=''
        title='unde omnis iste <br/>natus error.'
        description='doloremque laudantium, totam rem aperiam, eaque.<br/> error sit voluptatem accusantium doloremque laudantium,<br/> totam rem aperiam, eaque ipsa'
        href='/'
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
        background='bg-slate-50'
        text='text-black'
        button='border border-black text-black progress-button-dark'
        href='/'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image={logoNero}
        opacity='opacity-100'
        translate='md:translate-x-[20%]'
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
    </div>
  )
}

export default Prodotti