function Pizza({ pizza }) {
  return (
    <div className='pizza'>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.price}</p>
        {pizza.soldOut ? <p>Sold Out</p> : <p>In Stock</p>}
      </div>
    </div>
  )
}

export default Pizza
