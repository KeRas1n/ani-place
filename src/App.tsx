import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/Home'
import { Profile } from './pages/Profile'
import { SingleAnime } from './pages/SingleAnime'
import TopAnimePage from './pages/TopAnime'
import SearchPage from './pages/SearchPage'


function App() {
  return <>
  <Header/>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/catalog/anime/:id' element={<SingleAnime/>} />
    <Route path='/anime/:id' element={<SingleAnime/>} />
    <Route path='/catalog' element={<SearchPage/>}>
    
    
    </Route>
    <Route path='/top-anime/' element={<TopAnimePage/>} />
  </Routes>
  </>
}


export default App
