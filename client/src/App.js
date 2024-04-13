import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';  // Assurez-vous que ce composant existe
import HomePage from './components/HomePage';  // La page principale après connexion

function App() {
  const [user, setUser] = useState(null);

  // Simuler une vérification d'authentification
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData)); // Stocker l'utilisateur dans localStorage pour la persistance de la session
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <LoginForm onLogin={handleLogin} />}
        </Route>
        <Route path="/">
          {user ? <HomePage onLogout={handleLogout} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
