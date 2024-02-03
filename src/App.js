import React from 'react'
import TopNav from './Components/TopNav'
import Featured from './Components/Featured'
import Delivery from './Components/Delivery'
import TopPicks from './Components/TopPicks'
import Meal from './Components/Meal'
import Categories from './Components/Categories'
import NewsLetter from './Components/NewsLetter'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App