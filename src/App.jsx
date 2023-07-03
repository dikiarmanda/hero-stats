// import { useState } from 'react'
import './App.css'
import CardWithDecorativeImage from './components/CardWithDecorativeImage'
import FooterWithSocialMediaIcons from './components/FooterWithSocialMediaIcons'
import NavbarWithCTAButton from './components/NavbarWithCTAButton'

function App() {

  return (
    <>
      <NavbarWithCTAButton/>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <CardWithDecorativeImage/>
        <CardWithDecorativeImage/>
        <CardWithDecorativeImage/>

      </div>

      <FooterWithSocialMediaIcons/>
    </>
  )
}

export default App
