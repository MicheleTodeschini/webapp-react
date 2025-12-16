import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepgae from "./Pages/HomePage";
import FilmInfoPage from "./Pages/FilmInfoPage";
import { GlobalProvider } from "../context/GlobalContext";


function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepgae />} />
            <Route path='/FilmInfoPage/:id' element={<FilmInfoPage />} />


          </Routes>

        </BrowserRouter>

      </GlobalProvider>
    </>
  )
}


export default App