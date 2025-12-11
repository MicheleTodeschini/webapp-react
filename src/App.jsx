import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepgae from "./Pages/HomePage";
import FilmInfoPage from "./Pages/FilmInfoPage";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepgae />} />
          <Route path='/FilmInfoPage' element={<FilmInfoPage />} />


        </Routes>

      </BrowserRouter>


    </>
  )
}


export default App