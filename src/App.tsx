import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./componets/Header"


import AboutPage from "./pages/About"
import MapPage from "./pages/Map"
import SettingsPage from "./pages/Settings"
import ShipPage from "./pages/Ships"

function App() {


  return (
    <>
      <h1> starting over</h1>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/ships" element={<ShipPage/>}/>
        <Route path="/map" element={<MapPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        
      </Routes>
      </BrowserRouter>
    
      

    </>
  )
}

export default App
