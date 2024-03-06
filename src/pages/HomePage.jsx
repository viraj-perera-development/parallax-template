import React from 'react';
import MinimalSection from '../components/MinimalSection';
import MouseFollow from '../components/MouseFollow';
import ballerina from '../assets/staticSection/family8.jpg';
import ballerina2 from '../assets/staticSection/ballerina1.png';
import Navbar from '../components/Navbar';
import JustText from '../components/JustText';



function HomePage() {

  return (
    <div className="">
      <Navbar />
      <MouseFollow/>
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
        href='/'
        imageUrl={ballerina2}
        imgOpacity="opacity-80"
        strength='0.14'
        lerp='0.30'
      />
      <JustText 
        background='bg-black' 
        title='consectetur, adipisci velit, sed.' 
        titleClass='text-5xl text-slate-50' 
        description={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        descriptionClass='text-slate-50'
        buttonClass='border border-slate-50 text-slate-50 progress-button-light'
        buttonText='scopri di più'
        href='/'
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
        href='/'
        imageUrl={ballerina}
        imgOpacity="opacity-60"
        strength='0.14'
        lerp='0.30'
      />
      <JustText 
        background='bg-black' 
        title='nostrud exercitation<br/> ullamco laboris nisi' 
        titleClass='text-5xl text-slate-50' 
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        descriptionClass='text-slate-50'
        buttonClass='border border-slate-50 text-slate-50 progress-button-light'
        buttonText='scopri di più'
        href='/'
      />
    </div>
  )
}

export default HomePage