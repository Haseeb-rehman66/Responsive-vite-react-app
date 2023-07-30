import React from 'react'
import Mainpage from '../Main';
import { createContext } from 'react';
import About from '../About';
import Contact from '../Contact';
import Services from '../Services';




export const propcontex = createContext(0);

const Home = () => {
  const data ={
    name: "Olive Solutions",
    img: "./images/hero.svg"
  };

  

  
  return (
    <>
        <propcontex.Provider value = {data} >

<Mainpage/>

</propcontex.Provider>
<About/>
<Services/>
<Contact/>
    
    
    </>



  )
}

export default Home;