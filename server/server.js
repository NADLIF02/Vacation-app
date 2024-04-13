const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Charger les variables d'environnement
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour gérer les requêtes CORS et JSON
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB avec gestion d'erreur
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.error("MongoDB connection error: ", err));

// Importation et utilisation des routes d'authentification
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

// Serve static files from the React application
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Un gestionnaire "catchall" pour toutes les requêtes qui ne correspondent pas aux autres routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
