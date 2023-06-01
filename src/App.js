import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import MovieInfo from './components/MovieInfo';
import About from './layout/About';
import { Footer } from './layout/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='info/:id'
            element={<MovieInfo />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
