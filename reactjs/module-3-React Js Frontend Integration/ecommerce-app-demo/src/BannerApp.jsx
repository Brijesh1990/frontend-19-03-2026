import React from 'react'
import banner1 from './assets/customer/images/banner.webp'
export default function BannerApp() {
  return (
   <>
  {/* clickIt banner here  */}
  <section id="clickIt-banner" className="mt-0 p-5">
    <a href="products.html">
      <img src={banner1} className="w-full" />
    </a>
  </section>
</>

  )
}
