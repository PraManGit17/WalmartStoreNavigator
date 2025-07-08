import React from 'react'
import StoreMap from './components/StoreMap'
import Navbar from './components/Navbar'
import RouteSelector from './components/RouteSelector'
import { RouteProvider } from './context/RouteContext'

const App = () => {
  return (
    <RouteProvider>
      <div className='py-6 px-4'>
        <Navbar />
        <div className='w-full py-4 h-[580px] flex items-center gap-2'>
          <StoreMap />

          <div className='border-2 w-full h-full rounded-2xl'>
            <RouteSelector />
          </div>
        </div>

      </div>
    </RouteProvider>

  )
}

export default App
