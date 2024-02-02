import { useState } from 'react'

const Form = ({ changeColor }) => {
  const [color, setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    changeColor(color)
  }
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="color"
          id="colorInput"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#rrggbb"
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  )
}
export default Form
