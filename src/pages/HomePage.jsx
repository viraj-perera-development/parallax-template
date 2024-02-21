import React from 'react'
import MinimalSection from '../components/MinimalSection';
import MouseFollow from '../components/MouseFollow';

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
        imageUrl='https://picsum.photos/200/601'
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
        buttonClass='border border-sky-600 text-sky-600'
        buttonText='scopri di più'
        href='/'
        imageUrl='https://picsum.photos/200/600'
        strength='0.14'
        lerp='0.30'
      />
    </div>
  )
}

export default HomePage