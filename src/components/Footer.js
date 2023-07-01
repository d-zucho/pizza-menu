function Footer() {
  const openHour = 11
  const closeHour = 23
  const currentHour = new Date().getHours()
  const isOpen = currentHour >= openHour && currentHour <= closeHour

  return (
    <footer className='footer'>
      <p>{new Date().toLocaleTimeString()}</p>
      <p>We're currently {isOpen ? 'Open' : 'Closed'}</p>
    </footer>
  )
}

export default Footer
