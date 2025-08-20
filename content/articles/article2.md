---
id: "installer un pi hole sur raspberry pi"
title: "installer un pi hole sur raspberry pi"
badge: "projet perso"
image: "/pi-hole.png"
date: "2025-08-13"
readTime: "5 min"
description: "Pour débuter mon aventure dans la cybersécurité, j’ai décidé de renforcer la sécurité de mon réseau domestique. La première étape : créer mon propre Pi-hole, un serveur DNS maison qui filtre les publicités, trackers et malwares."
---
## Installer un Pi-hole sur Raspberry Pi
Pour débuter mon aventure dans la cybersécurité, j’ai décidé de renforcer la sécurité de mon réseau domestique. La première étape : créer mon propre Pi-hole, un serveur DNS maison qui filtre les publicités, trackers et malwares.

## 💻 Mon projet
- Création d’un Pi-hole sur mon Raspberry Pi 3 pour gérer mon DNS local
- Installation d’AdGuard Home pour bloquer pubs et trackers directement à la source, sur tous les appareils
- Plus besoin d’AdBlock sur chaque navigateur : tout est géré au niveau du réseau

## 🔍 Petit rappel : Qu'est-ce qu'un DNS ?
Le DNS (Domain Name System) traduit les noms de domaines lisibles par l'homme, comme www.example.com, en adresses IP compréhensibles par les ordinateurs, comme 93.184.216.34. C'est un peu l'annuaire téléphonique d'Internet.

## comment ça fonctionne
### Requête DNS  
L'appareil envoie une requête DNS pour obtenir l'adresse IP correspondant au nom de domaine.

### Résolution DNS  
Le serveur DNS interroge d'autres serveurs pour trouver l'adresse IP associée au nom de domaine.

### Réponse DNS  
L'adresse IP est renvoyée à l'appareil, qui peut alors se connecter au site web.

## 🕳️ Qu'est-ce qu'un DNS Sinkhole ?
Un DNS sinkhole intercepte et bloque les requêtes DNS vers des domaines indésirables, tels que publicités, trackers ou malwares.

## Comment ça fonctionne
### Interception des requêtes  
Le serveur DNS sinkhole intercepte les requêtes.

### Réponse factice  
Si le domaine est sur une blacklist, le serveur répond avec une IP invalide (0.0.0.0 ou 127.0.0.1).

### Blocage du contenu  
L'appareil ne peut pas se connecter, le contenu indésirable est bloqué.

## 🛡️ Pi-hole et AdGuard Home : DNS Sinkholes à la Maison
- Pi-hole : application open-source qui agit comme serveur DNS sinkhole. Installation sur Raspberry Pi ou Linux, filtrage via blacklists et whitelists.
- AdGuard Home : alternative moderne à Pi-hole, support DNS over HTTPS/TLS, interface de configuration avancée.

## 📋 Blacklists et Whitelists
- Blacklists : domaines connus pour publicités, trackers ou malwares.
- Whitelists : domaines autorisés même s'ils sont sur une blacklist.

## 🏠 Ma configuration : AdGuard Home sur Raspberry Pi 3
- Rôle : mon Raspberry Pi devient le serveur DNS de toute la maison, filtrant automatiquement publicités, trackers et contenus malveillants.
- Configuration : IP statique + routeur configuré pour utiliser AdGuard comme DNS pour tous les appareils.
- Avantages : plus besoin d’installer AdBlock sur chaque appareil, navigation plus rapide et suivi en temps réel des requêtes bloquées.

➡️ Next step : pourquoi pas configurer mon propre VPN ?
