import logo from '../assets/logo/blackLogo.png';
import Name from '../components/first/form';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Stay, What U’re Name?
        </p>
        <div>
          <Name/>
        </div>
      </header>
    </div>
  );
}

export default App;
