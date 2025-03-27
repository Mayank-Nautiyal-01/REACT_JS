import React, { useContext } from 'react'
import { BioContext } from './Index'

function Home() {
   const {myName,myAge}=useContext(BioContext)
  return (
   <h1>Hello my name is {myName} and my age is {myAge}</h1>
  )
}

export default Home