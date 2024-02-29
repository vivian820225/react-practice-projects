import { useState } from 'react'
import Card from './Card'
import DropIndicator from './DropIndicator'
import AddCard from './AddCard'

const Column = ({ title, headingColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false)

  const clearHighlights = (els) => {
    const indicators = els || getIndicators()

    indicators.forEach((indicator) => {
      indicator.style.opacity = '0'
    })
  }

  const highlightIndicator = (e) => {
    const indicators = getIndicators()
    clearHighlights(indicators)
    const nearestEl = getNearestIndicator(e, indicators)
    nearestEl.element.style.opacity = '1'
  }

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50 // for the top one

    const target = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = e.clientY - (box.top + DISTANCE_OFFSET)

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY, // 負無窮大
        element: indicators[indicators.length - 1],
      }
    )

    return target
  }

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`))
  }

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('cardId', card.id)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    highlightIndicator(e)
    setActive(true)
  }

  const handleDragLeave = (e) => {
    clearHighlights()
    setActive(false)
  }

  const handleDragEnd = (e) => {
    const targetId = e.dataTransfer.getData('cardId')

    clearHighlights()
    setActive(false)

    const indicators = getIndicators()
    const { element } = getNearestIndicator(e, indicators)
    const before = element.dataset.before || '-1'

    if (before !== targetId) {
      let copy = [...cards]
      let cardToTransfer = copy.find((card) => card.id === targetId)
      if (!cardToTransfer) return
      cardToTransfer = { ...cardToTransfer, column }

      copy = copy.filter((card) => card.id !== targetId)

      const moveToBack = before === '-1' // 是否在最尾端

      if (moveToBack) {
        copy.push(cardToTransfer)
      } else {
        const insertAtIndex = copy.findIndex((card) => card.id === before)
        if (insertAtIndex === undefined) return
        copy.splice(insertAtIndex, 0, cardToTransfer)
      }

      setCards(copy)
    }
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
