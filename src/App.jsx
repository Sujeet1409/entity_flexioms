import { useState } from 'react'
import CreateEntity from './components/CreateEntity/CreateEntity'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CreateEntity/>
      </div>
    </>
  )
}

export default App
