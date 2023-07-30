import React from 'react'
import Mainpage from '../Main';
import { propcontex } from '../Home';

const About = () => {
  const data = {
    name: "Olive",
    img: "./images/about1.svg"
  };
  return (
    <propcontex.Provider value = {data}>
    <Mainpage />
    </propcontex.Provider>
  )
}

export default About;