import { useState, useEffect } from 'react'
import Board from './Board'
import GameOver from './GameOver'
import GameState from '../config/GameState'
import Reset from './Reset'
import clickSoundAsset from '../sounds/click.wav'
import gameOverSoundAsset from '../sounds/game_over.wav'

const clickSound = new Audio(clickSoundAsset)
const gameOverSound = new Audio(gameOverSoundAsset)
clickSound.volume = 0.5
gameOverSound.volume = 0.2

const PLAYER_O = 'o'
const PLAYER_X = 'x'

const winningCombinations = [
  // Row
  { combo: [0, 1, 2], strikeClass: 'strike-row-1' },
  { combo: [3, 4, 5], strikeClass: 'strike-row-2' },
  { combo: [6, 7, 8], strikeClass: 'strike-row-3' },
  // Column
  { combo: [0, 3, 6], strikeClass: 'strike-column-1' },
  { combo: [1, 4, 7], strikeClass: 'strike-column-2' },
  { combo: [2, 5, 8], strikeClass: 'strike-column-3' },
  // Diagonals
  { combo: [0, 4, 8], strikeClass: 'strike-diagonal-1' },
  { combo: [2, 4, 6], strikeClass: 'strike-diagonal-2' },
]

const checkWinner = (tiles, setStrikeClass, setGameState) => {
  for (const { combo, strikeClass } of winningCombinations) {
    const val1 = tiles[combo[0]]
    const val2 = tiles[combo[1]]
    const val3 = tiles[combo[2]]

    if (val1 !== null && val1 === val2 && val2 === val3) {
      setStrikeClass(strikeClass)
      if (val1 === PLAYER_O) {
        setGameState(GameState.PlayerOWins)
      }
      if (val1 === PLAYER_X) {
        setGameState(GameState.PlayerXWins)
      }
      return
    }

    const isDraw = tiles.every((tile) => tile !== null)
    if (isDraw) {
      setGameState(GameState.Draw)
    }
  }
}

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState(PLAYER_O)
  const [strikeClass, setStrikeClass] = useState()
  const [gameState, setGameState] = useState(GameState.InProgress)

  const handleTileClick = (index) => {
    if (gameState !== GameState.InProgress) return

    if (tiles[index] !== null) return

    const newTiles = [...tiles]
    newTiles[index] = playerTurn
    setTiles(newTiles)

    if (playerTurn === PLAYER_O) {
      setPlayerTurn(PLAYER_X)
    } else {
      setPlayerTurn(PLAYER_O)
    }
  }

  const handleReset = () => {
    setGameState(GameState.InProgress)
    setTiles(Array(9).fill(null))
    setPlayerTurn(PLAYER_O)
    setStrikeClass(null)
  }

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState)
  }, [tiles])

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play()
    }
  }, [tiles])

  useEffect(() => {
    if (gameState !== GameState.InProgress) {
      gameOverSound.play()
    }
  }, [gameState])

  return (
    <section className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      <Board
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </section>
  )
}
export default TicTacToe
