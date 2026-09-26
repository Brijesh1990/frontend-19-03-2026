import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavbarApp from './NavbarApp'
import CarSlider from './BannerApp'
import ContainerApp from './ContainerApp'
import FooterApp from './FooterApp'
import './style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* navigation */}
   <NavbarApp />
   {/* sliders */}
   <CarSlider />
    {/*content  */}
   <ContainerApp />
   {/* footer */}
   <FooterApp />
  </StrictMode>,
)
