# Utiliser une image Ubuntu
FROM ubuntu:latest

# Installer Node.js et les outils nécessaires
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Créer un dossier pour l'application et le définir comme répertoire de travail
WORKDIR /app

# Copier les fichiers de package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install
# Installer les dépendances de l'application en utilisant npm ci pour une installation plus propre
RUN npm ci --only=production
# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["node", "server.js"]
