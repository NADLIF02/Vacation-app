# Utiliser une image Node.js officielle comme image de base
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tous les fichiers du projet dans le conteneur
COPY . .

# Construire l'application React
RUN npm run build

# Installer serve pour servir l'application sur le port 5000
RUN npm install -g serve

# Définir la commande pour démarrer l'application
CMD ["serve", "-s", "build", "-l", "5000"]
