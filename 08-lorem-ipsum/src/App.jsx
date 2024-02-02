import { useState } from 'react'
import { nanoid } from 'nanoid'
import data from './data'
const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsm?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((para) => {
          return <p key={nanoid()}>{para}</p>
        })}
      </article>
    </section>
  )
}
export default App
