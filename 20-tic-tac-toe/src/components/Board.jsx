import Strike from './Strike'
import Tile from './Tile'

const Board = ({ tiles, onTileClick, strikeClass }) => {
  return (
    <div className="board divide-x">
      {tiles.map((tile, index) => {
        return (
          <Tile
            key={index}
            value={tiles[index]}
            onClick={() => onTileClick(index)}
          />
        )
      })}

      <Strike strikeClass={strikeClass} />
    </div>
  )
}
export default Board
