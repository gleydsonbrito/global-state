import React, { useState } from 'react';
import logo from '../assets/logo.png'
import spinner from '../assets/spinner.gif'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [erro, setErro] = useState<string>('')

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setErro('')
    const fetchLogin = async () => {
      try {
        const response = await fetch('https://dummyjson.com/auth/login',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
          }
        )
        if (!response.ok) throw new Error('Erro na requisição')

        const userData = await response.json()
        localStorage.setItem('accessToken', userData.accessToken)
        navigate('/main/products')
      } catch (err) {
        setErro(`Algo inesperado aconteceu. ${err}`)
      }
    }
    fetchLogin()
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4 bg-[#FFA500]">
      <img className='w-48 h-auto' src={logo} alt="" />
      <form
        className="bg-white flex flex-col justify-center items-center w-fit p-8 gap-4 rounded-md shadow-lg"
        onSubmit={handleSubmit}>
        <input
          className="border-b border-gray-300 text-sm font-mono text-gray-500 outline-none"
          placeholder="Login"
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)} />
        <input
          className="border-b border-gray-300 text-sm font-mono text-gray-500 outline-none"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        {erro && <p className="text-red-500 text-[0.5rem]">{erro}</p>}
        <button
          className='px-2 bg-blue-200 w-full rounded-md text-gray-600 shadow-md disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed flex items-center justify-center'
          type="submit"
          disabled={!username || !password}>
              {isLoading ? <img className='w-8 h-auto self-center' src={spinner}/> : "Entrar"}
        </button>
      </form>
    </div>
  )
}

export default Login
