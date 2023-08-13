import React from 'react'
import { Navbar } from "../../components/Navbar/Navbar"
import { Footer } from "../../components/Footer/Footer";
import Head from 'next/head';
export const Layout = ({children}) => {
  return (
    <>
        <Head>
          <title>Fromdtrip</title>
          <link rel="icon" type="image/x-icon" href="/img/Logo.png"></link>

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.fromdtrip.com/" />
          <meta property="og:title" content="Fromdtrip" />
          <meta property="og:description" content="We sell trippy clothing" />
          <meta property="og:image" content="/img/Logo.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.fromdtrip.com/" />
          <meta property="twitter:title" content="Fromdtrip" />
          <meta property="twitter:description" content="We sell trippy clothing" />
          <meta property="twitter:image" content="/img/Logo.png" />

        </Head>
        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}
