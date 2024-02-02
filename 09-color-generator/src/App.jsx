import { useState } from 'react'
import Form from './Form'
import ColorList from './ColorList'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const defaultColors = new Values('#74a9e2').all(10)
  const [colors, setColors] = useState(defaultColors)

  const changeColor = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <main>
      <Form changeColor={changeColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App
