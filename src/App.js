import { DATA } from './data'
import './App.css'
import PizzaList from './components/PizzaList'
import Header from './components/Header'
import Footer from './components/Footer'

const pizzaData = DATA

// const data = [
//   {
//     name: 'Focaccia',
//     ingredients: 'Bread with italian olive oil and rosemary',
//     price: 6,
//     photoName: '/public/pizzas/focaccia.jpg',
//     soldOut: false,
//   },
//   {
//     name: 'Pizza Margherita',
//     ingredients: 'Tomato and mozarella',
//     price: 10,
//     photoName: '/public/pizzas/margherita.jpg',
//     soldOut: false,
//   },
//   {
//     name: 'Pizza Spinaci',
//     ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
//     price: 12,
//     photoName: '/public//pizzas/spinaci.jpg',
//     soldOut: false,
//   },
//   {
//     name: 'Pizza Funghi',
//     ingredients: 'Tomato, mozarella, mushrooms, and onion',
//     price: 12,
//     photoName: '/public/pizzas/funghi.jpg',
//     soldOut: true,
//   },
//   {
//     name: 'Pizza Salamino',
//     ingredients: 'Tomato, mozarella, and pepperoni',
//     price: 15,
//     photoName: '/public/pizzas/salamino.jpg',
//     soldOut: true,
//   },
//   {
//     name: 'Pizza Prosciutto',
//     ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
//     price: 18,
//     photoName: '/public/pizzas/prosciutto.jpg',
//     soldOut: false,
//   },
// ]

// const Pizza = () => {
//   return (
//     <div className='pizza'>
//       <h2>Pizza</h2>
//       <p>Ingredients: </p>
//       <p>Price: </p>
//       <img src='pizzas/focaccia.jpg' alt='' />
//     </div>
//   )
// }

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
        <PizzaList pizzaData={pizzaData} />
        <Footer />
      </div>
    </div>
  )
}

export default App
