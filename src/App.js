import './App.css'
import Thread from './pages/thread/Thread'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/threads/:threadId' element={<Thread/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
