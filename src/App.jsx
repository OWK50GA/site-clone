import { 
  createBrowserRouter, 
  Route,  
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";


import './App.css'

// Layouts
import RootLayout from "./layout/RootLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import SponsorUs from "./pages/SponsorUs";
import Register from "./pages/Register";
import CoreTeam from "./pages/CoreTeam";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="sponsor-us" element={<SponsorUs />}/>
        <Route path="faq" element={<Faq />}/>
        <Route path="core-team" element={<CoreTeam />}/>
        <Route path="register" element={<Register />}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
