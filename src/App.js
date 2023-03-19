import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/screens/Home';
import { InfoScreen } from './components/screens/InfoScreen';
import { Profile } from './components/screens/Profile';
import { Trending } from './components/screens/Trending';
import { Watchlist } from './components/screens/Watchlist';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info/:id' element={<InfoScreen />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/watchlist' element={<Watchlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
