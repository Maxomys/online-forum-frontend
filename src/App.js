import './App.css'
import Thread from './pages/thread/Thread'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagination from './components/Pagination'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/threads/:threadId' element={<Thread/>}/>
          <Route path='/test' element={<Pagination totalPages={6} page={2}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
