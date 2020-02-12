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
### Utilisation

Pour démarrer le serveur faites :
```sh
$ npm start
```

La documentation et les requêtes peuvent se faire à l'adresse `localhost:3000/graphiql`

Nous utilisons l'api `www.football-data.org/` pour récuperer les informations.

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

License
----

MIT

