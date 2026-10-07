import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  const navigate = useNavigate()
  function handleLogout() {
    localStorage.removeItem('accessToken')
    navigate('/')
  }
  return (
    <header className='p-4 h-[4rem] bg-[#FFA500] flex items-center'>
      <nav className='w-full flex justify-between items-center'>
        <Link to='/main/products' className='cursor-pointer'>
          <img className='w-[3.5rem] h-auto transition-transform duration-300 hover:scale-102' src={logo} alt="" />
        </Link>
        <div className='flex gap-8'>
          <Link to='/main/favorites' className='text-white hover:bg-[#df9205] px-2 hover:px-2 hover:rounded-md hover:shadow-md transition-transform duration-300 hover:scale-102'>Favoritos</Link>
          <button onClick={handleLogout} className='text-[0.7rem] px-2 bg-white rounded-sm shadow-md text-gray-600 transition-transform duration-300 hover:scale-102'>Sair</button>
        </div>
      </nav>
    </header>
  )
}