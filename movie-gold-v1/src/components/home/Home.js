import Heros from "../heros/Heros"

const Home = ({movies}) => {
  return (
    <Heros movies = {movies} />
    //<div>Welcome!!</div>
  )
}

export default Home