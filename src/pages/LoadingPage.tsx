import spinner from '../assets/spinner.gif'

export default function LoadingPage(){
  return (
    <div className="x-screen y-screen flex justify-center items-center">
      <img className="w-[35%] h-auto" src={spinner} />
    </div>
  )
}