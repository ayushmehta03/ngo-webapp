import React from 'react'
import NavBar from '../components/NavBar'
import './css/home.css'
const HomePage = () => {
  return (
    <main>
      <div className='navbar-div'>
        <NavBar />
      </div>

      <section style={{ padding: "2rem" }}>
      <h2 className='starter'>Welcome To Creative Educational And Social Welfare Organization</h2>
      </section>
    </main>
  )
}

export default HomePage
