import React from 'react'
import HeaderApp from './HeaderApp'
import BannerApp from './BannerApp'
import ContentApp from './ContentApp'
import FooterApp from './FooterApp'
export default function LayoutApp() {
  return (
    <>
         {/*header reused here  */}
          <HeaderApp />
          {/*Banner section  */}
          <BannerApp />
          {/* content section */}
          <ContentApp />
          {/* footer section */}
          <FooterApp />
    </>
  )
}
