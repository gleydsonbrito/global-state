import type React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectRouteProps {
  children: React.ReactNode
}

export default function ProtectRoute({ children }: ProtectRouteProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      alert('Usuário deve efetuar o login primeiro')
      navigate('/')
    }
  }, [])
  return (
    <>
      {children}
    </>
  )
}