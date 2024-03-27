import './App.css';
  import {Route} from 'react-router-dom';
  import { BrowserRouter as Router, Routes} from 'react-router-dom';
  import Home from './componentes/Home';
  import Ods from  './componentes/Ods';
  import Sobre from './componentes/Sobre';

  function App() {

    return (
      <Router>
        <Routes>
          <Route path= '/' element={<Home/>}></Route>
          <Route path= '/Ods' element={<Ods/>}></Route>
          <Route path= '/Sobre' element={<Sobre/>}></Route>
          
        </Routes>
      </Router>
    )
  }

  export default App
