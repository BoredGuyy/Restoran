# Restoran Website Backend

La chaîne "Restoran" vise à renforcer sa présence sur le marché de la restauration en créant un site web pour améliorer sa stratégie marketing de ses restaurants à travers le pays. Ce site permettra aux clients de consulter les repas, de réserver une table, et regroupera toutes les informations essentielles pour les futurs clients afin de les inciter à venir déguster sa cuisine !

## Objectifs

En résumé, avec un site internet pour la chaine vous vous assurez des points suivants :

- Être trouvé facilement.
- Offrir un système de réservation.
- Faire découvrir les valeurs de la chaine et de la cuisine.

## Mission

Votre mission consiste à développer la partie backend du site après que le développeur frontend ait terminé le développement complet du template du site (le template est fourni dans la partie ressources).

Vous serez chargé des tâches suivantes :

- Modéliser et créer la base de données.
- Créer les endpoints nécessaires (Home, About, Contact, les repas, envoyer un email, ajouter un repas).
- Rendre dynamique les sections: repas, teams, coordonnées de restaurant de la page Home (en utilisant un template engine: ejs).
- Envoyer un email de remerciement aux nouveaux abonnés de la newsletter.
- Enregistrer toutes les informations nécessaires sur les requêtes entrantes (en utilisant les middlewares) dans un fichier texte (utiliser la méthode promise API du module fs).

## Règles de gestion

- Un repas peut avoir une et une seule catégorie.
- Un restaurant peut employer un ou plusieurs employés.
- Un restaurant peut servir un ou plusieurs repas.
- Le restaurant propose à ses clients de s'abonner à sa newsletter.

## Technologies à utiliser

- Environnement Node.js et Express pour créer un serveur web.
- SGBDR: MySQL. Vous pouvez choisir entre ORM Prisma et TypeORM, mais je vous recommande Prisma.
- Template engine: EJS.
- Envoi des emails: Nodemailer + un service d'email marketing (ex: Mailchimp, SendGrid,...).
