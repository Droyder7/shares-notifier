// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './helper/AuthContext';
import NavBar from './components/layout/NavBar';
import Routes from './components/Routes/Routes';

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes />
    </AuthProvider>
  );
}

export default App;
