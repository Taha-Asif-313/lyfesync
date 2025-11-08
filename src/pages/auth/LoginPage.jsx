import { ReactUserLogin } from '@neuctra/authix'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <ReactUserLogin logoUrl={"/logo.png"} onError={(err)=>console.log(err)
    } onSuccess={()=>navigate("/tasks")} />
  )
}

export default LoginPage