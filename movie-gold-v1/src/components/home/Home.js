import React from "react"
import Heros from "../heros/Heros"

const Home = ({movies}) => {
  return (
    <Heros movies={movies}/>
  )
}

export default Home