import bolt from './assets/bolt.svg'
import fire from './assets/fire.svg'
import SkillChart from './components/chart.skill'
import FrameworkLogo from './components/frameworklogos.skills'
import './App.css'

function App() {

  return (
    <main>
      <section className="h-[45vh] w-screen bg-cover bg-center bg-gray-400 bg-[url('./assets/IMG_9822.JPG')]">
      </section>
      <section className='h-[50vh] flex flex-col justify-center items-center gap-10'>
        {/* <HeaderCard /> */}
        {/* <span className='asset_1'></span>
        <span className='asset_2'></span> */}
        <h1 className='text-4xl font-extrabold md:w-[45%] lg:w-[45%] text-black mx-5'>Bimo is a fresh graduate IT student based in
          <span className="text-red-600">
            &nbsp;Indonesia.
          </span>
        </h1>
        <p className='text-sm text-gray-500 md:w-[35%] lg:w-[35%] mx-12'>I love to design software, explore new tech, & listening music. Currently, i’m focusing on UI/UX design and mobile development using flutter.</p>
      </section>
      <section className='flex flex-col py-[10vh] items-center gap-10 bg-slate-50 rounded-t-[3em]'>
        <div className='flex flex-col items-center gap-6'>
          <img src={bolt} className=' w-12' />
          <h1 className='text-3xl text-gray-500 font-extrabold'>
            What are <span className='text-black'>my skills</span>
          </h1>
          <SkillChart />
          <div className='flex flex-col items-center gap-3'>
            <p className='text-gray-500 text-sm'>tools & frameworks i usually use:</p>
            <FrameworkLogo />
          </div>
        </div>
        <div className='flex flex-col items-center pt-12 gap-3'>
          <p className='text-gray-500 text-2xl'>some of my <span className='text-black'>featured projects</span></p>
        </div>
      </section>
      <section className='flex flex-col py-[10vh] items-center gap-10 bg-white rounded-t-[3em]'>
        <div className='flex flex-col items-center gap-6'>
          <img src={fire} className=' w-12' />
          <h1 className='text-3xl text-gray-500 font-extrabold text-center'>
            Here are my <span className='text-black'>work journey</span>
          </h1>
        </div>
        <div className='flex flex-col items-center pt-12 gap-3'>
          <p className='text-gray-500 text-2xl text-center'>I have also been actively involved in several <span className='text-black'>organization & activities</span></p>
        </div>
      </section>
    </main>
  );
}

export default App
