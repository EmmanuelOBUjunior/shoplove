import React from 'react'
import '../styled/Section.scss'

const Section = () => {
  return (
    <section className='main-section'>
        <div className="contents">
            <h1>Look Great, Smell Good, Feel Sassy</h1>
            <button>Explore</button>
        </div>
        <div className="inside-text">
            <p>10% off for all our products</p>
            </div>
    </section>
  )
}

export default Section