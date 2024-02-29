import { useState } from 'react'
import Card from './Card'
import DropIndicator from './DropIndicator'
import AddCard from './AddCard'

const Column = ({ title, headingColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false)

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('cardId', card.id)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setActive(true)
  }

  const handleDragLeave = (e) => {
    setActive(false)
  }

  const handleDragEnd = (e) => {
    setActive(false)
  }

  const filteredCards = cards.filter((card) => card.column === column)

  return (
    <section className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`h-full w-full transition-colors ${
          active ? 'bg-neutral-800/50' : 'bg-neutral-800/0'
        }`}
      >
        {filteredCards.map((card) => {
          return (
            <Card key={card.id} {...card} handleDragStart={handleDragStart} />
          )
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </section>
  )
}
export default Column
