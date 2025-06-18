import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './layout/Header/Header';
import { Home } from './Home/Home';
import { PhotoDetails } from './PhotoDetails/PhotoDetails';
import { Favorites } from './Favorites/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photo/:id' element={<PhotoDetails />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
