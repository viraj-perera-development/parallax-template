import React, { useEffect, useRef } from 'react';

function Test() {


    return (
        <div>

                <div  className="cursor fixed top-0 left-0 w-full flex justify-center items-center w-1/2 text-center">
                    <h2 className={`font-bold`}>Your Text Here</h2>
                </div>
                <div  className="fixed top-0 left-0 w-full flex justify-start items-center text-center">
                    <h2 className={`font-bold text-red-500`}>Your Text Here</h2>
                </div>
                <div className='bg-red-500' style={{ height: '50vh' }}></div>
                <div className='bg-black' style={{ height: '50vh' }}></div>
                <div className='bg-slate-50' style={{ height: '50vh' }}></div>
                <div className='bg-pink-100' style={{ height: '50vh' }}></div>
                <div className='bg-cyan-500' style={{ height: '50vh' }}></div>
                <div className='bg-black' style={{ height: '50vh' }}></div>
                <div className='bg-violet-900' style={{ height: '50vh' }}></div>
                <div className='bg-zinc-500' style={{ height: '50vh' }}></div>
                <div className='bg-cyan-500' style={{ height: '50vh' }}></div>
                <div className='bg-violet-900' style={{ height: '50vh' }}></div>

        </div>
    );
}

export default Test;
