import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Ajout d'un état pour gérer les messages d'erreur

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      onLogin({ username, token: response.data.token }); // Lever l'état d'authentification avec le token et le nom d'utilisateur
      setError(''); // Réinitialiser les erreurs précédentes
    } catch (error) {
      // Afficher une erreur générique ou une erreur renvoyée par le serveur
      setError(error.response ? error.response.data.message : 'Login failed due to server error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {/* Affichage des messages d'erreur */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default LoginForm;
