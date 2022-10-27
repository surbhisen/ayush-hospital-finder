import { useState } from 'react'
import Navbar from './componant/Navbar'
import Homepage from './componant/Homepage'
import List from './componant/List'
import Footer from './componant/Footer'
import About from './componant/About'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Homepage />
      <About />
      <List />
      <Footer />
    </div>
  )
}

export default App
