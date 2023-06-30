// import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Pages/Landing/Landing';
import Card from './Pages/Card/Card';
import Content from './Pages/Content/Content';
// import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/content' element={<Content/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
