import bolt from './assets/bolt.svg'
import fire from './assets/fire.svg'
import resume from './assets/resume-button.svg'
import avatar2 from './assets/avatar-2.png'
import macbook from './assets/macbook.png'
import SkillChart from './components/chart.skill'
import FrameworkLogo from './components/frameworklogos.skills'
import WorkCard from './components/cards.work'
import Activity from './components/activity.work'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css'

function App() {

  return (
    <main>
      <ParallaxProvider>
        <section className="h-[50vh] bg-cover bg-center bg-[url('./assets/IMG_9822.JPG')]">
        </section>
        <section className='h-[45vh] pt-12 flex flex-col justify-center items-center gap-10'>
          {/* <HeaderCard /> */}
          {/* <span className='asset_1'></span>
        <span className='asset_2'></span> */}

          <Parallax translateY={[0, -50]} className='text-4xl font-extrabold text-black mx-5 md:w-[45%] lg:w-[45%]'>
            <h1>Bimo is a fresh graduate IT student based in
              <span className="text-red-600">
                &nbsp;Indonesia.
              </span>
            </h1>
          </Parallax>
          <Parallax translateY={[0, -100]} className='text-sm text-gray-500 md:w-[35%] mx-12'>
            <p>I love to design software, explore new tech, & listening music. Currently, i’m focusing on UI/UX design and mobile development using flutter.</p>
          </Parallax>
        </section>
        <section className='flex flex-col py-[10vh] items-center gap-10 m-3 rounded-3xl bg-slate-50'>
          <div className='flex flex-col items-center gap-6'>
            <Parallax translateY={[50, 0]} className='flex justify-center items-center flex-col'>
              <img src={bolt} className='w-12 drop' />
              <h1 className='text-3xl text-gray-500 font-extrabold'>
                What are <span className='text-black'>my skills</span>
              </h1>
            </Parallax>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn' className=' animate duration-500'>
              <SkillChart />
              <section className='w-screen'>
                <div className='flex flex-col items-center gap-3'>
                  <p className='text-gray-500 text-sm'>tools & frameworks i usually use:</p>
                  <FrameworkLogo />
                </div>
              </section>
            </ScrollAnimation>
          </div>
          <div className='flex flex-col items-center pt-12 gap-3'>
            <p className='text-gray-500 text-2xl'>some of my <span className='text-black'>featured projects</span></p>
          </div>
        </section>
        <section className='flex flex-col py-[10vh] items-center gap-10 rounded-t-[3em]'>
          <div className='flex flex-col items-center gap-6 px-36'>
            <img src={fire} className=' w-12' />
            <h1 className='text-3xl text-gray-500 font-extrabold text-center'>
              Here are my <span className='text-black'>work journey</span>
            </h1>
            <WorkCard />
            <p className='text-sm text-gray-500'>and still going...</p>
          </div>
          <div className='flex flex-col items-center pt-12 gap-3 px-36'>
            <p className='text-gray-500 text-2xl text-center px-60 py-12'>I have also been actively involved in several <span className='text-black'>organization & activities</span></p>
            <Activity />
          </div>
          <div className='flex items-center justify-center pt-12 gap-3 px-96'>
            <span className='text-end text-sm'>
              lastly if you want short version of me, you can download my resume & portfolio here
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <a href='/'>
              <img src={resume} className='hover:scale-105 animate duration-150 ease-in-out' />
            </a>
          </div>
        </section>
        <section className='flex flex-col py-[10vh] items-center gap-10  text-sm rounded-t-[3em]'>
          <div className="absolute -z-10 left-96 mt-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl" />
          <div className="absolute -z-10 right-96 mt-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl" />
          <div className="absolute -z-10 mt-48 w-96 h-96 bg-teal-100 rounded-full blur-3xl" />
          <div className='flex flex-col items-center'>
            <img src={avatar2} className='h-20' />
            <span>thank you for stopping by, let's collaborate together!</span>
          </div>
          <img src={macbook} className=' h-80' />
          <span>get in touch with me and i’ll start up my machine</span>
        </section>
      </ParallaxProvider>
    </main>
  );
}

export default App
