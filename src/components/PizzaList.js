import Pizza from './Pizza'

function PizzaList(props) {
  return (
    <div className='pizzas'>
      {props.pizzaData.map((pizza) => (
        <Pizza key={pizza.name} pizza={pizza} />
      ))}
    </div>
  )
}

export default PizzaList
