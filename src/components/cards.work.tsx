import ylabs from '../assets/company-logos/ylabs.svg'
import poldev from '../assets/company-logos/poldev.png'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

export default function WorkCards() {
  return (
    <ParallaxProvider>
      <ul className='text-sm inline-flex gap-6 mb-20'>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn' animateOnce={true} delay={250} className='w-1/3 animate duration-500'>
          <Parallax translateY={[20, -10]} className=' bg-slate-50 p-6 rounded-2xl h-fit'>
            <img src={poldev} className='h-10' />
            <p className='text-xs py-4 text-gray-500'>FEB 2023 - JUL 2023</p>
            <h1 className='font-extrabold'>Front End Engineer Intern</h1>
            <p className='text-gray-500'>Created UI/UX Design of YLabs Indonesia’s website and other projects.</p>
          </Parallax>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn' animateOnce={true} delay={500} className='w-1/3 animate duration-500'>
          <Parallax translateY={[50, 0]} className='bg-slate-50 p-6 rounded-2xl h-fit'>
            <img src={ylabs} className='h-10' />
            <p className='text-xs py-4 text-gray-500'>OCT 2021 - MAR 2022</p>
            <h1 className='font-extrabold'>UI/UX Designer Intern</h1>
            <p className='text-gray-500'>Created UI/UX Design of YLabs Indonesia’s website and other projects.</p>
          </Parallax>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn' animateOnce={true} delay={750} className='w-1/3 animate duration-500'>
          <Parallax translateY={[80, 10]} className='bg-slate-50 p-6 rounded-2xl h-fit'>
            <img src={ylabs} className='h-10' />
            <p className='text-xs py-4 text-gray-500'>JUL 2021 - OCT 2021</p>
            <h1 className='font-extrabold'>Creative Designer Intern</h1>
            <p className='text-gray-500'>Created visual design and design assets of YLabs Indonesia and designed social media content concept of YLabs Indonesia.</p>
          </Parallax>
        </ScrollAnimation>
      </ul>
    </ParallaxProvider >
  );
}