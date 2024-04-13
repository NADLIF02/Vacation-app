import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Optionnel : Ajout d'un contexte global ou d'un fournisseur de store si utilisé
// import { Provider } from 'react-redux';
// import store from './store'; // Supposons que vous ayez un Redux store

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Si vous utilisez Redux ou un autre state management, enveloppez App avec le Provider */}
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// Gestionnaire d'erreurs global pour attraper les erreurs JavaScript non capturées
window.onerror = function (message, source, lineno, colno, error) {
  console.log("An error occurred:", message);
};

// Gestion des rejets de promesse non gérés
window.onunhandledrejection = function (event) {
  console.warn(`Unhandled promise rejection: ${event.reason}`);
};
