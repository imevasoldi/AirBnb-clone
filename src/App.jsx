import data from "../data"
import Card from "./Components/Card"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

function App() {
  const cardElements = data.map(card => (
    <Card
    key={card.id}
    card={card}    />
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

// <Card
//   key={card.id}
//   title={card.title}
//   price={card.price}
//   url={card.coverImg}
//   starurl="star.png"
//   rating={card.stats.rating}
//   views={card.stats.reviewCount}
//   location={card.location}
//   openSpots={card.openSpots}
// />