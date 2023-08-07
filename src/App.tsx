import bolt from './assets/bolt.svg'
import HeaderCard from './components/cards.header'
import FrameworkLogo from './components/frameworklogos.skills'
import './App.css'

function App() {

  return (
    <main>
      <section className='h-[90vh] flex flex-col py-[20vh] items-center gap-10'>
        <HeaderCard />
        <span className='asset_1'></span>
        <span className='asset_2'></span>
        <h1 className='text-3xl font-extrabold md:w-[45%] lg:w-[45%] text-black mx-5'>Bimo is a fresh graduate IT student based in
          <span className="text-red-600">
            &nbsp;Indonesia
          </span>
        </h1>
        <p className='text-sm text-gray-500 md:w-[35%] lg:w-[35%] mx-12'>I love to design software, explore new tech, & listening music. Currently, i’m focusing on UI/UX design and mobile development using flutter.</p>
      </section>
      <section className='flex flex-col py-[10vh] items-center gap-12 bg-slate-50 rounded-[4em]'>
        <div className='flex flex-col items-center gap-4'>
          <img src={bolt} className=' w-12' />
          <h1 className='text-3xl text-gray-500 font-extrabold'>
            What are <span className='text-black'>my skills</span>
          </h1>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <p className='text-gray-500 text-sm'>tools & frameworks i usually use:</p>
          <FrameworkLogo />
        </div>
      </section>
    </main>
  );
}

export default App
