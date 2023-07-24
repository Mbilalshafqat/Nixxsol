import React from 'react'
import App from './App'
import Navbar from './components/Navbar'

const Main = () => {
  return (
    <>
      <div className='relative'>
        <div>
            <Navbar/>
        </div>
        <App/>
      </div>
    </>
  )
}

export default Main
