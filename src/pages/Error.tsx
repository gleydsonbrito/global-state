import notFound from '../assets/notFound.avif'
export default function ErrorPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <img className='w-[48%] h-auto self-center' src={notFound}/>
    </div>
  )
}