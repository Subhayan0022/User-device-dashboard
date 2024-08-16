import React, { useEffect, useState} from 'react'
import Cards from './components/cards'
import LoginPage from './components/loginpage'
import StartPage from './components/startmodule'
import UserInfo from './components/userinfo'

function index() {

  const [message, setMessage] = useState("Loading")

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      res => res.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
      }
    )
  }, [])

  return (
    <div className = "flex w-full h-full mt-10 ">
      <div className='h-full w-full card-page'>
        <Cards/>
        {/* <StartPage/> */}
      </div>
      <div className='h-full w-2/12 ml-6 user-page'>
        <LoginPage/>
      </div>
    </div>
    
  )
}

export default index