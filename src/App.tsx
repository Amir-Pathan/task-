import { useEffect } from 'react'
import './App.css'
import Login from './login'
import Details from './details'
import { Route,Routes, useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()
  
  useEffect(()=>{

    let user = localStorage.getItem('user')

    if(user==null){
      navigate('/login')

    }

  },[])

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Details/>}/>
        <Route path={'/login'} element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
