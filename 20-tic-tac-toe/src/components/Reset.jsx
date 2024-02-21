import GameState from '../config/GameState'

const Reset = ({ gameState, onReset }) => {
  if (gameState === GameState.InProgress) {
    return
  }
  return (
    <button type="button" className="reset-button" onClick={onReset}>
      Reset
    </button>
  )
}
export default Reset
