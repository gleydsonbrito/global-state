import notFound from '../assets/notFound.avif'
import Header from '../components/Header'
export default function ErrorPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header/>
      <img className='w-[48%] h-auto self-center' src={notFound}/>
    </div>
  )
}