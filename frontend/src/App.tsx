import './App.css';
import api from './http';
import {AuthResponse} from './types/auth-response';

function App() {
  api.post<AuthResponse>('/auth/register');
  return (
    <div className="App">
    </div>
  );
}

export default App;
