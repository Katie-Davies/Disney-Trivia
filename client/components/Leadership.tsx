import { useGetLeaders } from '../hooks/useGetLeaderboard'

function Leadership() {
  const { data: leaderboard, isLoading, isError } = useGetLeaders()
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
        <h1>Leadership</h1>

        {sortedLeadershipBoard?.map((player) => {
          return (
            <>
              <div className="scoreboard">
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

        {/* {leaderboard.map((player) => {
            return <td key={player.id}>{player.score}</td>
          })} */}
      </div>
    )
}

export default Leadership
