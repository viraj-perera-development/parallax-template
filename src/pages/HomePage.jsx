import React from 'react';
import MinimalSection from '../components/MinimalSection';
import FullMinimalSection from '../components/FullMinimalSection';
import FullBWSection from '../components/FullBWsection';
import FullTransparentSection from '../components/FullTransparent';
import MouseFollow from '../components/MouseFollow';
import cassaforte from '../assets/minimalSection/cassaforte.jpg';
import invest from '../assets/minimalSection/invest.jpg';
import logoNero from '../assets/mouseFollow/logonero.png';
import logoBianco from '../assets/mouseFollow/logobianco.png';
import logoVuotoNero from '../assets/mouseFollow/logo-sfondo-nero.png';
import logoVuotoBianco from '../assets/mouseFollow/logo-sfondo-bianco.png';
import diagonally from '../assets/mouseFollow/diagonalley_nero.png';
import diagonallyWR from '../assets/mouseFollow/diagonalley_strana_bianco.png';


function HomePage() {
  return (
    <div className="" style={{"height":"1000rem"}}>
      <MouseFollow/>
      <MinimalSection 
        orientation='right' 
        background='bg-slate-50' 
        title='I vantaggi del
        piano di accumulo
        Helior Plan®' 
        titleClass='text-5xl'
        description={`
        <p class='font-medium my-9 text-xl text-neutral-500'>ACQUISTO IN ORO IN UN’UNICA SOLUZIONE</p> <p class="font-normal tracking-wide text-pretty text-neutral-500 text-xl mb-16">Acquista la quantità desiderata di oro e beneficia della custodia da uno a dieci anni nel nostro prestigioso caveau di Lugano.<br/><br/>
        Puoi acquistare oro in questi formati:<br/>
        - 100/250/500 grammi, con custodia di 5 anni<br/>
        - 1 chilogrammo con custodia da 1 anno a 10 anni.</p>
        `}
        descriptionClass=''
        buttonClass='border border-sky-600 text-sky-600'
        buttonText='scopri di più'
        href='/'
        imageUrl={cassaforte}
        strength='0.14'
        lerp='0.30'
      />
      <MinimalSection 
        orientation='left' 
        background='bg-black' 
        title='I vantaggi del
        piano di accumulo
        Helior Plan®' 
        titleClass='text-5xl text-slate-50' 
        description={`
        <p class='font-semibold my-9 text-xl text-neutral-500'>ACQUISTO IN ORO IN UN’UNICA SOLUZIONE</p> <p class="font-normal tracking-wide text-pretty text-neutral-500 text-xl mb-16">Acquista la quantità desiderata di oro e beneficia della custodia da uno a dieci anni nel nostro prestigioso caveau di Lugano.<br/><br/>
        Puoi acquistare oro in questi formati:<br/>
        - 100/250/500 grammi, con custodia di 5 anni<br/>
        - 1 chilogrammo con custodia da 1 anno a 10 anni.</p>
        `}
        descriptionClass='text-slate-50'
        buttonClass='border border-slate-50 text-slate-50'
        buttonText='scopri di più'
        href='/'
        imageUrl={invest}
        strength='0.14'
        lerp='0.30'
      />
      <FullMinimalSection />
      <FullBWSection 
      background='bg-slate-50'
      text='text-black'
      button='border border-black text-black'
      href='/'
      title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
      image={logoNero}
      opacity='opacity-10'
      bgOpacity=''
      translate='md:translate-x-[0%]'
      />
      <FullBWSection 
      background='bg-black'
      text='text-slate-50'
      button='border border-slate-50 text-slate-50'
      href='/'
      title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
      image={logoBianco}
      opacity='opacity-10'
      bgOpacity=''
      translate='xl:translate-x-[100%]'
      />
      <FullTransparentSection 
      background={invest}
      text='text-slate-50'
      button='border border-slate-50 text-slate-50'
      href='/'
      title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
      image={logoVuotoNero}
      opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
      bgOpacity='bg-black opacity-65'
      translate='xl:translate-x-[100%]'
      />
      <FullTransparentSection 
      background={cassaforte}
      text='text-black'
      button='border border-black text-black'
      href='/'
      title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
      image={logoVuotoBianco}
      opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
      bgOpacity='bg-white opacity-85'
      translate='xl:translate-x-[100%]'
      backgroundColor='bg-white	'
      orientation="left"
      />
      <FullTransparentSection 
      background={cassaforte}
      text='text-slate-50'
      button='border border-slate-50 text-slate-50'
      href='/'
      title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
      image={diagonally}
      opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
      bgOpacity='bg-black opacity-85'
      translate='xl:translate-x-[100%]'
      backgroundColor='bg-black'
      orientation="left"
      />
      <FullTransparentSection 
      background={cassaforte}
      text='text-black'
      button='border border-black text-black'
      href='/'
      title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
      image={diagonallyWR}
      opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
      bgOpacity='bg-black opacity-90'
      translate='xl:translate-x-[100%]'
      backgroundColor='bg-white'
      orientation="left"
      />
    </div>
  )
}

export default HomePage