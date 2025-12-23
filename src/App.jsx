import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Container from "./components/Container"
import Contacts from './components/Contacts/Contacts';
import SeeDetail from './components/SeeDetail/SeeDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container/>}/>
          <Route path="/contact" element={<Contacts/>}/>
          <Route path="/see-detail/:productId" element={<SeeDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
