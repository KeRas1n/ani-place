import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AnimeCard } from './components/AnimeCard'
import Header from './components/Header'
import { Watchlist } from './components/Watchlist'
import { useGetTopAnimeQuery } from './store/anime/anime.api'
import HomePage from './pages/Home'
import { Profile } from './pages/Profile'
import { SingleAnime } from './pages/SingleAnime'


function App() {
  return <>
  <Header/>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/anime/:id' element={<SingleAnime/>} />
  </Routes>
  </>
}


export default App
