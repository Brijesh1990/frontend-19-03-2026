import React from 'react'
import HeaderApp from './HeaderApp'
import BannerApp from './BannerApp'
import ContentApp from './components/customer/ContentApp'
import FooterApp from './FooterApp'
import LoginApp from './components/customer/LoginApp'
import ChangeLocationApp from './components/customer/ChangeLocationApp'
export default function Layout() {
  return (
    <>
    <HeaderApp />
    <BannerApp />
    <ContentApp />
    <FooterApp />
    <LoginApp />
    <ChangeLocationApp />
    </>
  )
}
