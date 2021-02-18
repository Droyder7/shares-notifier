// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/layout/NavBar';
import Routes from './components/Routes/Routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
