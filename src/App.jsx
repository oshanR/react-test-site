import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a className="emoji" href="https://vitejs.dev" target="_blank">
          🍆💦🍑
        </a>
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
