import data from "../data"
import Card from "./Components/Card"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

function App() {
  const cardElements = data.map(card => (
    <Card
    key={card.id}
    {...card}    />
    ))
    return (
      <div className="container">
      <Navbar/>
      <Hero/>
      <div className="cards--container">
        {cardElements}
      </div>
    </div>
  )
}

export default App
