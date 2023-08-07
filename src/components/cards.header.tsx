import avatar from '../assets/avatar-1.png'

export default function HeaderCard() {
  return(
    <div className='flex flex-row items-center p-2 px-6 border-2 border-gray-200 rounded-2xl'>
      <img src={avatar} className="avatar h-16" alt="avatar" />
      <div className='flex flex-col'>
        <p className='font-extrabold'>Bimo Aji Fajrianto</p>
        <p className='text-gray-700 font-light'>#OpenToWork</p>
      </div>
    </div>
  );
}