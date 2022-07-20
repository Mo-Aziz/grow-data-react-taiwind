import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white '>
        <div className='max-w-[800px] mt-[-96px] mx-auto text-center w-full h-screen flex flex-col justify-center'>

        <p className='font-bold uppercase text-[#00df9a] p-2'>Growing with data analytics</p>
        <h1 className='text-4xl sm:text-6xl md:text-7xl md:py-6 font-bold'>Grow With Data.</h1>
        <div className='flex items-center justify-center p-4'>
        <h3 className='text-xl sm:text-4xl md:text-5xl font-bold'>Fast, flexible financing for </h3>  
        <Typed className=' pl-2 md:pl-4 text-xl sm:text-4xl md:text-5xl font-bold'
                strings={[
                    'BTB',
                    'BTC',
                    'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop/>
        </div>
        <p className='py-4 text-xl md:text-2xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC, & SASS</p>
         
        <button className=' bg-[#00df9a] w-[200px] rounded-md cursor-pointer font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
       
    </div>
  )
}

export default Hero