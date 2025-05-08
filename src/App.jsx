import { useState } from 'react'
import CreateEntity from './components/CreateEntity/CreateEntity'
import { Route, Routes } from 'react-router-dom'
import Entity from './components/CreateEntity/Entity'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<CreateEntity/>} />
          <Route path='/entity' element={<Entity/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
