import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import MovieInfo from './components/MovieInfo';
import About from './layout/About';

function App() {
  // const [info, setInfo] = useState();
  // console.log(info);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'>
            <Route
              path='hero'
              element={<Main />}
            />
            <Route
              path='about'
              element={<About />}
            />
            <Route
              path='info/:id'
              element={
                <MovieInfo
                // info={info}
                // setInfo={setInfo}
                />
              }
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
