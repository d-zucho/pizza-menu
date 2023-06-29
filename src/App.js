import { DATA } from './data'
import './App.css'
import PizzaList from './components/PizzaList'
import Header from './components/Header'

const pizzaData = DATA

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <div className='menu'>
          <PizzaList pizzaData={pizzaData} />
        </div>
      </div>
    </div>
  )
}

export default App
