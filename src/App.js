
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Employee from './pages/Employee';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Home/>}/>   
        <Route path={'/employee'} element={<Employee/>}/>   
        <Route path={'/contact'} element={<Contact/>}/>   
           </Routes>
           <Footer/>
    </div>
  );
}

export default App;
