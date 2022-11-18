import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import { PageHome } from './pages/PageHome/PageHome'
import { Projects } from './pages/Projects/Projects'
import { Contact } from './pages/Contact/Contact'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<PageHome />}
        />
        <Route
          path='/projects/'
          element={<Projects />}
        />

        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
    </div>
  )
}

export default App
