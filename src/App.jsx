
import Product from './components/Product' 
import './App.css'
import Counter from './components/counter'
import Hooks from './components/hooks'
import Home from "./components/home"

const App = () => {
  return (
    <div className="App">
    <Home/>
    <Hooks/>
    <Product/>
    <Counter/>
      </div>
    
  )
  }

export default App
