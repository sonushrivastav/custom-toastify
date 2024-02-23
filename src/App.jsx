
import Comp1 from '../components/comp1/Comp1';
import Comp2 from '../components/comp2/Comp2';
import Comp3 from '../components/comp3/Comp3';
import Header from '../components/header/Header'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <div className='Appcontainer'>
        <Router>
        <Header/>
          <Routes>
            <Route path="/comp1" element={<Comp1/>} />
            <Route path="/comp2" element={<Comp2/>}/>
            <Route path="/comp3" element={<Comp3/>}/>
        </Routes>
        </Router>
       </div>
    </>
  )
}

export default App
