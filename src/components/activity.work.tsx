import kmteti from '../assets/activity-logos/kmteti.svg'
import nl from '../assets/activity-logos/nl.png'
import nesco from '../assets/activity-logos/nesco.png'
import ScrollAnimation from 'react-animate-on-scroll';

export default function WorkCards() {
  return (
    <ul className='text-sm inline-flex gap-6'>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn' animateOnce={true} delay={200} className='w-1/3 animate duration-500'>
        <li className='p-6 rounded-2xl mb-20 h-fit'>
          <img src={kmteti} className='h-10' />
          <h1 className='font-extrabold py-2'>Head of Information &  Communication KMTETI FT UGM</h1>
          <p className='text-gray-500'>Led and organized Information and Communication division consists of 4 subdivisions</p>
        </li>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn' animateOnce={true} delay={400} className='w-1/3 animate duration-500'>
        <li className='p-6 rounded-2xl mb-20 h-fit'>
          <img src={nl} className='h-10' />
          <h1 className='font-extrabold py-2'>Member of NightLogin UX Community</h1>
          <p className='text-gray-500'>Discuss and exchange ideas related to UI/UX with other members</p>
        </li>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn' animateOnce={true} delay={600} className='w-1/3 animate duration-500'>
        <li className='p-6 rounded-2xl mb-20 h-fit'>
          <img src={nesco} className='h-10' />
          <h1 className='font-extrabold py-2'>Coordinator of Design NESCO 2021</h1>
          <p className='text-gray-500'>Managed 5 members team to collaborate and responsible for all design needs of NESCO 2021</p>
        </li>
      </ScrollAnimation>
    </ul>
  );
}