import React, { useState } from 'react';
import banner from '../../../images/Banner.jpg';
import { BsFilePostFill } from 'react-icons/bs';
import { MdFindInPage } from 'react-icons/md';
import useTitle from '../../../hooks/useTitle';
import Browse from '../Browse/Browse';
import FreshersJob from '../FreshersJob/FreshersJob';

const Home = () => {
    useTitle('Home');
    const [isJobSeeker, setIsJobSeeker] = useState(false);
    const togglePerson = () =>{
        setIsJobSeeker(!isJobSeeker);
    }
    return (
    <section>
           <div className='relative'>
                <img alt="work hard to grow your career" src={banner} className='absolute inset-0 w-full h-[70vh] bg-cover bg-center'/>
                <div className='absolute inset-0 bg-gray-900 bg-opacity-95 h-[70vh]'></div>
                <div className='absolute inset-20 text-center'>
                    <h3 className='lg:text-[3rem] text-[1.8rem] font-bold text-white'>Aim Higher, 
                    Reach Farther, Dream Bigger.</h3>
                    <p className='text-violet-300 w-[90%] lg:w-[50%] mx-auto lg:text-lg text-sm mt-2'>A better career is out there.We'll help you find it.We're your first step 
                        to become everything you want to be.
                    </p>
                </div>
                <div onClick={togglePerson}>
                    <div className='flex items-center text-center absolute left-[3rem] lg:left-[20rem] inset-80 bg-slate-700 h-[4rem] w-[20rem] mx-auto
                    rounded-lg p-3'>
                        {isJobSeeker ?
                            <>
                                <span><MdFindInPage size='2rem' color='white'/></span>
                                <p  data-for="tool" data-tip='switch' className='ml-3 text-white text-lg'>Click to continue as Job Seeker</p>
                            </>
                        : 
                            <>
                            <span><BsFilePostFill size='2rem' color='white'/></span>
                            <p className='ml-3 text-white text-lg'>Click to continue as Job Poster</p>
                            </>
                        }
                    </div>
                </div>
            </div>
           <div className='absolute top-[93%] left-[15%] w-4/5 mx-auto'>
           <Browse></Browse>
           </div>
           <div className='absolute top-[120%] left-[10%] w-4/5 mx-auto'>
           <FreshersJob></FreshersJob>
           </div>
        </section>
    );
};

export default Home;