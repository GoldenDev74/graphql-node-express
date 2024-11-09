# GraphQL API Todos
  Une API GraphQL pour gérer des tâches (Todos) avec Node.js et Express.

# Prérequis
Assurez-vous d'avoir Node.js et npm installés sur votre machine.
Installation
Clonez le projet et installez les dépendances nécessaires :
git clone https://github.com/GoldenDev74/graphql-node-express.git
cd graphql-node-express
npm install

# Dépendances
Ce projet utilise les dépendances suivantes :

express : pour créer le serveur HTTP.
graphql : pour définir et exécuter des requêtes GraphQL.
express-graphql : middleware pour intégrer GraphQL avec Express.
nodemon : pour recharger automatiquement le serveur lors des modifications de code.
Pour installer ces dépendances, exécutez la commande suivante (si elles ne sont pas déjà installées) :
` npm install express graphql express-graphql nodemon `

## Query Actions 
  - [] allTodos
  - [] oneTodos
  - [] filteredTodos 
## Mtations Actions 
  - [] createTodos
  - [] updateTodos
  - [] deleteTodos 
## comment consommer côté front 
  - [] exemple avec allTodos (id, text, finished)
  - [] exemple avec oneTodos (id : 'entrez un Id')
  - [] exemple avec filteredTodos (finished: true or false)
  - [] exemple avec createTodos (text, finished)
  - [] exemple avec updateTodos (id, text, finished)
  - [] exemple avec deleteTodos (id : 'entrez un Id')

