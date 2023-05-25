import React from 'react'
import { Navbar } from "../../components/Navbar/Navbar"
import { Footer } from "../../components/Footer/Footer";
export const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}
