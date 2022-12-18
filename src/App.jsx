import Card from "./Components/Card"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <Card
        url="\katie-zaferes.png"
        starurl="\star.png"
        rating={5.0}
        views={6}
        country="USA"
        price={136}
        title="Life lessons with Katie Zaferes"
      />
    </div>
  )
}

export default App
