import React from 'react'
import Header from './layout/header/Header'
import NavBar from './layout/navBar/NavBar'
import IndexContent from './layout/content/IndexContent'
import Content from './layout/content/Content'
import Footer from './layout/footer/Footer'

const Layout = ({name}) => {
  return (
    <div>
      {name}
      <div>
        <Header />
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <IndexContent />
          <Content />
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Layout

