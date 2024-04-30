import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Nav() {
  const navigate = useNavigate()

  function handleLeadershipBoard() {
    navigate('/leadershipboard')
  }

  return (
    <div className="nav-container">
      <Header />
      <button className="homeLink" onClick={handleLeadershipBoard}>
        Leadership Board
      </button>
    </div>
  )
}

export default Nav
