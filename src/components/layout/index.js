// import Navbar from '/navbar'
// import Footer from '/footer'

import Head from 'next/head'
import Navbar from "../navbar";
import Footer from "../footer"

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title} - Coffe Shop</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,800;1,300;1,400;1,600&display=swap" rel="stylesheet" />
          </Head>
          {/* <Navbar /> */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
        )
}