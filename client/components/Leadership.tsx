import { useGetLeaders } from '../hooks/useGetLeaderboard'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function Leadership() {
  const { data: leaderboard, isLoading, isError } = useGetLeaders()
  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  if (isLoading) {
    return <p>Loading ...</p>
  }
  if (isError) {
    return <p>There has been an error!</p>
  }
  const sortedLeadershipBoard = leaderboard?.sort((a, b) => b.score - a.score)

  if (leaderboard)
    return (
      <div>
        <Header />

        <h1 className="homeLink">Leadership Board</h1>
        <div className="flex">
          <button onClick={handleClick} className="answer-button">
            Play Again
          </button>
        </div>
        <div className="flex">
          <div className="scoreboard">
            <div className="scoreboard-container">
              {sortedLeadershipBoard?.map((player) => {
                return (
                  <>
                    <div className="flex">
                      <div className="scoreboard-div">
                        <p key={player.id}>{player.name}</p>
                      </div>
                      <div className="scoreboard-div">
                        <p>{player.score}</p>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        {/* {leaderboard.map((player) => {
            return <td key={player.id}>{player.score}</td>
          })} */}
      </div>
    )
}

export default Leadership
