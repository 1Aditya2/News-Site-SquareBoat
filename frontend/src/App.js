// import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Pages/Landing/Landing';
import Card from './Pages/Card/Card';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LoadingBar from "react-top-loading-bar";
// import Footer from './Components/Footer/Footer';


function App() {
  const loadRef = useRef();
  const isLoading = useSelector((state) => state.newsReducer.isLoading);
  useEffect(() => {
    if (isLoading) {
      loadRef.current?.continuousStart();
    } else {
      loadRef.current?.complete();
    }
  }, [isLoading]);
  return (
    <div className="App">
      <LoadingBar ref={loadRef} color="rgb(42, 150, 251)" height={2} />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/card' element={<Card/>}/>
       
      </Routes>
      
    </div>
  );
}

export default App;
