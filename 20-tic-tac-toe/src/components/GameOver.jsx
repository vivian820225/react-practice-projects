import GameState from '../config/GameState'

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState.PlayerOWins:
      return <div className="game-over">O Wins</div>
    case GameState.PlayerXWins:
      return <div className="game-over">X Wins</div>
    case GameState.Draw:
      return <div className="game-over">Draw</div>
    default:
      return <></>
  }
}
export default GameOver
