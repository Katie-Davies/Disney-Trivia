import { useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/game')
  }
  return (
    <div className="homepage">
      <div className="homepage-container">
        <h1>Disney Trivia</h1>
        <button onClick={handleClick}>Let&apos;s Play</button>
      </div>
    </div>
  )
}

export default Homepage
