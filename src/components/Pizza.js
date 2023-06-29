function Pizza({ name, price, soldOut, photoName }) {
  return (
    <div className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        {soldOut ? <p>Sold Out</p> : <p>In Stock</p>}
      </div>
    </div>
  )
}

export default Pizza
