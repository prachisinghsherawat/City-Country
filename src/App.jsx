import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './AllRoutes/allRoutes';
import { NavbarIs } from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <NavbarIs/>
      <AllRoutes />
    </div>
  );
}

export default App;
