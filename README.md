# GraphQl Api

### Installation

Ce projet néccessite un environnement avec [Node](https://nodejs.org/en/) v10, de [NPM](https://www.npmjs.com/) v6.

Une fois c'est environnement en place, placez vous à la racine du projet et installez les dependances avec la commande.

Cloner le project :
```sh
$ git clone https://github.com/fahde-sorgho/football-scores-graphql.git
```

Une fois cette étape terminée, rendez vous à la racine du projet puis installez les dépendances avec la commande :

```sh
$ npm install
```

Initialiser la base de données Sqlite:

```sh
$ node_modules/.bin/sequelize db:migrate
```
### Utilisation

Pour démarrer le serveur faites :
```sh
$ npm start
```

L'API est accessible à l'adresse : `localhost:3000/api`

La documentation et les requêtes peuvent se faire à l'adresse `localhost:3000/graphiql`

Nous utilisons l'api `www.football-data.org` pour récuperer les informations.

Vu que nous utilisons un token gratuit nous avons accès seulement aux compétitions avec identifiants :
* 2000 : FIFA World Cup **World**
* 2001 : UEFA Champions League **Europe**
* 2002 : Bundesliga **Germany**
* 2003 : Eredivisie **Netherlands**
* 2013 : Série A **Brazil**
* 2014 : Primera Division **Spain**
* 2015 : Ligue 1 **France**
* 2016 : Championship **England**
* 2017 : Primeira **Liga**
* 2018 : European Championship **Europe**
* 2019 : Serie A **Italy**
* 2021 : Premier League **England**

Vous pouvez remplacer le token par votre propre token dans le fichier `config/env.js`

License
----

MIT

