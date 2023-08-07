import figma from '../assets/framework-logos/figma.svg'
import ai from '../assets/framework-logos/adobe_illustrator.svg'
import ps from '../assets/framework-logos/adobe_photoshop.svg'
import github from '../assets/framework-logos/github.svg'
import gitlab from '../assets/framework-logos/gitlab.svg'
import html from '../assets/framework-logos/html.svg'
import css from '../assets/framework-logos/css.svg'
import react from '../assets/framework-logos/react.svg'
import flutter from '../assets/framework-logos/flutter.svg'

export default function FrameworkLogo() {
  return (
    <ul className='flex flex-row items-center py-2 px-6 gap-4 border-2 border-gray-200 rounded-3xl'>
      <li><img className='h-12 hover:scale-125 animate duration-75 hover:drop-shadow-xl' src={figma} /></li>
      <li><img className='h-12 hover:scale-125 animate duration-75 hover:drop-shadow-xl' src={ai} /></li>
      <li><img className='h-12 hover:scale-125 animate duration-75 hover:drop-shadow-xl' src={ps} /></li>
      <li><img className='h-12 hover:scale-125 animate duration-75 hover:drop-shadow-xl' src={github} /></li>
      <li><img className='h-12 hover:scale-125 animate duration-75 hover:drop-shadow-xl' src={gitlab} /></li>
      <li><img className='h-12 hover:scale-125 animate duration-75 hover:drop-shadow-xl' src={html} /></li>
      <li><img className='h-12 hover:scale-125 animate duration-75 hover:drop-shadow-xl' src={css} /></li>
      <li><img className='h-12 hover:scale-125 animate duration-75 hover:drop-shadow-xl' src={react} /></li>
      <li><img className='h-12 hover:scale-125 animate duration-75 hover:drop-shadow-xl' src={flutter} /></li>
    </ul>
  );
}