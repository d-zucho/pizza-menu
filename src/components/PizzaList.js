import Pizza from './Pizza'

function PizzaList({ pizzaData }) {
  return (
    <div className='pizzas'>
      {pizzaData.map((pizza) => (
        <Pizza key={pizza.name} pizza={pizza} />
      ))}
    </div>
  )
}

export default PizzaList
