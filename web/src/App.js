import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar'

function App() {
  return (
    <div style={{
      backgroundColor:'#1A535C',
      overflowX:'hidden',
      height:'100vh',
      width:'100%'
      }} className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
