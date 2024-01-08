import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllDoctors from './Components/AllDoctors';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewOneDoc from './Components/ViewOneDoc';





function App() {
  return (
    <div className="App">
      <Header/>
      
      <section>
        <Routes>
          <Route path='/' element={<AllDoctors/>}/>
          <Route path='/view/:id' element={<ViewOneDoc/>}/>
        </Routes>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
