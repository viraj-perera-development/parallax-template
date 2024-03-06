import React from 'react';
import Static from '../components/Static1';
import FullTransparentSection from '../components/FullTransparent';
import diagonally from '../assets/mouseFollow/diagonalley_nero.png';
import diagonallyWR from '../assets/mouseFollow/diagonalley_strana_bianco.png';
import pattern from '../assets/staticSection/forme-oro4.png';
import acqua from '../assets/staticSection/forme-oro3.png';
import Navbar from '../components/Navbar';
import headerImage from "../assets/staticSection/desert1.png";
import logoTransp from '../assets/mouseFollow/CIGtrasparente.png';
import JustText from '../components/JustText';


function Azienda() {

  return (
    <div className="">
      <Navbar />
      <Static 
        headerImage={headerImage}
        logoTransp={logoTransp}
        title='sapien quis auctor.<br/> Nulla congue justo.'
        description='tincidunt ut sapien quis auctor. Nulla fringilla congue justo.'
        href='/'
      />
      <FullTransparentSection 
        grid='grid grid-cols-1 lg:grid-cols-2'
        background={pattern}
        text='text-slate-50'
        button='border border-slate-50 text-slate-50 progress-button-light'
        href='/'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image={diagonally}
        opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
        bgOpacity='bg-black opacity-85'
        translate='xl:translate-x-[-25%]'
        backgroundColor='bg-black'
        orientation="left"
      />
      <JustText 
        background='bg-black' 
        title='eum fugiat quo voluptas<br/> nulla pariatur?' 
        titleClass='text-5xl text-slate-50' 
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        descriptionClass='text-slate-50'
        buttonClass='border border-slate-50 text-slate-50 progress-button-light'
        buttonText='scopri di più'
        href='/'
      />
        <FullTransparentSection 
          grid='grid grid-cols-1 lg:grid-cols-2'
          background={acqua}
          text='text-black'
          button='border border-black text-black progress-button-dark'
          href='/'
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
          image={diagonallyWR}
          opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
          bgOpacity='bg-white'
          translate='xl:translate-x-[30%]'
          backgroundColor='bg-white'
          orientation="right"
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
    </div>
  )
}

export default Azienda