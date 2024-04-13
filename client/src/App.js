import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';  // Vérifiez que ce composant existe et est correctement importé
import HomePage from './components/HomePage';  // La page principale après connexion

function App() {
  const [user, setUser] = useState(null);

  // Charger l'état de l'utilisateur au démarrage de l'application
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData)); // Stockage de l'utilisateur dans localStorage pour la persistance de la session
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Suppression de l'utilisateur de localStorage
    setUser(null); // Réinitialisation de l'état de l'utilisateur
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {/* Rediriger vers la page d'accueil si l'utilisateur est déjà connecté */}
          {user ? <Redirect to="/" /> : <LoginForm onLogin={handleLogin} />}
        </Route>
        <Route exact path="/">
          {/* Rediriger vers la page de connexion si aucun utilisateur n'est connecté */}
          {user ? <HomePage onLogout={handleLogout} /> : <Redirect to="/login" />}
        </Route>
        <Redirect to="/" /> {/* Redirection par défaut vers la page d'accueil */}
      </Switch>
    </Router>
  );
}

export default App;
