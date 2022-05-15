import './App.css';
import api from './http';
import {AuthResponse} from './types/auth-response';
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  // api.post<AuthResponse>('/auth/register');
  return (
    <AppRoutes/>
  );
}

export default App;
