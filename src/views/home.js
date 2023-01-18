import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Accountability Specialist</title>
        <meta
          property="og:title"
          content="Corporate Accountability Specialist"
        />
      </Helmet>
    </div>
  )
}

export default Home
