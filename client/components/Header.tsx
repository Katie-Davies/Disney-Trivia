import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  function handleReturnHome() {
    navigate('/')
  }

  return (
    <button className="homeLink" onClick={handleReturnHome}>
      Disney Trivia
    </button>
  )
}

export default Header
