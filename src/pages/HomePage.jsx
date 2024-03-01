import React, { useState, useEffect, useRef } from 'react';
import MinimalSection from '../components/MinimalSection';
import FullMinimalSection from '../components/FullMinimalSection';
import FullBWSection from '../components/FullBWsection';
import FullTransparentSection from '../components/FullTransparent';
import Static1 from '../components/Static1';
import MouseFollow from '../components/MouseFollow';

import cassaforte from '../assets/minimalSection/cassaforte.jpg';
import invest from '../assets/minimalSection/invest.jpg';
import logoNero from '../assets/mouseFollow/logonero.png';
import logoBianco from '../assets/mouseFollow/logobianco.png';
import logoVuotoNero from '../assets/mouseFollow/logo-sfondo-nero.png';
import logoVuotoBianco from '../assets/mouseFollow/logo-sfondo-bianco.png';
import diagonally from '../assets/mouseFollow/diagonalley_nero.png';
import diagonallyWR from '../assets/mouseFollow/diagonalley_strana_bianco.png';
import grano from '../assets/staticSection/6.png';
import sabbia from '../assets/staticSection/9.png';
import ballerina from '../assets/staticSection/2.png';
import ballerina2 from '../assets/staticSection/3.png';
import pattern from '../assets/staticSection/10.png';
import acqua from '../assets/staticSection/8.png';
import WaterSection from '../components/WaterSection';



function HomePage() {

  const [inViewport, setInViewport] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
        if (entry.isIntersecting) {
          // alert('Component is in the viewport');
        } else {
          // alert('Component is not in the viewport');
        }
      },
      { threshold: 0 } // Adjust the threshold as needed
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

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
        buttonClass='border border-black text-black progress-button-dark'
        buttonText='scopri di più'
        href='/'
        imageUrl={ballerina2}
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
        buttonClass='border border-slate-50 text-slate-50 progress-button-light'
        buttonText='scopri di più'
        href='/'
        imageUrl={ballerina}
        strength='0.14'
        lerp='0.30'
      />
      <FullMinimalSection />
      <FullBWSection 
        background='bg-slate-50'
        text='text-black'
        button='border border-black text-black progress-button-dark'
        href='/'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image={logoNero}
        opacity='opacity-10'
        translate='md:translate-x-[20%]'
      />
      <FullBWSection 
        background='bg-black'
        text='text-slate-50'
        button='border border-slate-50 text-slate-50 progress-button-light'
        href='/'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image={logoBianco}
        opacity='opacity-10'
        translate='xl:translate-x-[80%]'
      />
      <FullTransparentSection 
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
      <FullTransparentSection 
        background={grano}
        text='text-black'
        button='border border-black text-black progress-button-dark'
        href='/'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        description='In tincidunt ut sapien quis auctor. Nulla fringilla congue justo, nec auctor ante efficitur a. Mauris ac elit eget quam mattis pellentesque eget ut enim. Nunc mollis vehicula nisl eget sollicitudin. Vivamus luctus rhoncus pellentesque.'
        image={logoVuotoBianco}
        opacity='opacity-100 left-0 top-[-40vh] h-[100vh] w-full md:w-[100vh]'
        bgOpacity='bg-white opacity-85'
        translate='xl:translate-x-[-10%]'
        backgroundColor='bg-white	'
        orientation="left"
      />
      <FullTransparentSection 
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
        <FullTransparentSection 
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
      <div ref={sectionRef}>
        <Static1/>
        {inViewport && (
          <WaterSection />
        )}
      </div>
    </div>
  )
}

export default HomePage