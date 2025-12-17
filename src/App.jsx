// import { Home } from "lucide-react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Home from "./pages/Home/Home"
import AllRoutes from "./routes/routes"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AllRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App

