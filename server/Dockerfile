# Utiliser une image Ubuntu officielle comme base
FROM ubuntu:latest

# Installer curl et autres utilitaires nécessaires
RUN apt-get update && apt-get install -y curl software-properties-common

# Installer Node.js via le PPA de NodeSource
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get update && apt-get install -y nodejs

# Vérifier les installations de Node.js et npm
RUN node -v
RUN npm -v

# Définir le répertoire de travail pour les commandes suivantes
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Construire l'application, si nécessaire
# RUN npm run build

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 5000

# Définir la commande pour démarrer l'application
CMD ["node", "server.js"]
