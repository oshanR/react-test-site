import { useState } from 'react'
import './App.css'
import Title from './title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Title />
      </div>
      <h1>Oshan humtha</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          No of times molested: {count}
        </button>
      </div>
    </>
  )
}

export default App
