import './App.css'
import AppRouter from "./components/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </>
  )
}

export default App
