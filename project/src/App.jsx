import React from 'react'
import StoreMap from './components/StoreMap'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='py-6 px-4'>
      <Navbar />
      <div className='w-full py-4 h-[580px] flex items-center'>
        <StoreMap />
      </div>
    </div>
  )
}

export default App
