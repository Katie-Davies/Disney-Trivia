import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()

  function handleReturnHome() {
    navigate('/')
  }

  return (
    <div>
      <button className="homeLink" onClick={handleReturnHome}>
        Disney Trivia
      </button>
    </div>
  )
}

export default Nav
