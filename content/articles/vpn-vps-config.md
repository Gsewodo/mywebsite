---
id: "vpn-vps.md"
title: "Installer et configurer un VPN sur un VPS"
badge: "vpn"
image: "/vps-vpn.jpeg"
date: "2025-08-20"
readTime: "5 min"
description: "Sécuriser sa connexion Internet avec un VPN maison sur un VPS pour protéger ses données et naviguer de manière privée."
---

## Pourquoi installer un VPN sur un VPS

Un **VPN (Virtual Private Network)** crée un **tunnel sécurisé** entre votre appareil et Internet. Toutes vos données passent chiffrées à travers ce tunnel, ce qui empêche les fournisseurs d’accès, les pirates ou les réseaux publics de voir ce que vous faites en ligne.

Imaginez que vous êtes sur un réseau Wi-Fi public : sans VPN, vos requêtes sont visibles par tous. Avec un VPN, vos données sont **cryptées** et votre adresse IP réelle est **masquée** derrière celle du serveur VPN.

---

## Choisir un VPS pour son VPN

Pour héberger un VPN, vous avez besoin d’un **VPS**. C’est un serveur distant que vous louez auprès d’un fournisseur comme OVH, Scaleway ou DigitalOcean.

### Avantages :
- **Contrôle total** sur votre serveur et votre VPN.
- **Pas de logs partagés** avec des services VPN tiers.
- **Possibilité de choisir la localisation** de votre IP publique.

---

## Installer un VPN (OpenVPN ou WireGuard)

Il existe plusieurs solutions, mais **WireGuard** est moderne, léger et très rapide.

1. **Connexion au VPS via SSH** :
```   
ssh root@votre-vps-ip

```
2. **Installation de WireGuard** (exemple sur Ubuntu) :

```   
apt update && apt install wireguard -y
```


3. **Génération des clés** pour le serveur et le client :
``` 
wg genkey | tee server_private.key | wg pubkey > server_public.key
wg genkey | tee client_private.key | wg pubkey > client_public.key
``` 
4. **Configuration du serveur** (`/etc/wireguard/wg0.conf`) :
``` 
   [Interface]
   Address = 10.0.0.1/24
   ListenPort = 51820
   PrivateKey = <clé_privée_serveur>

   [Peer]
   PublicKey = <clé_publique_client>
   AllowedIPs = 10.0.0.2/32
``` 
5. **Activation du VPN** :
``` 
wg-quick up wg0
systemctl enable wg-quick@wg0
``` 

---

## Configuration du client

1. Installer WireGuard sur votre appareil (Windows, Mac, Linux, Android, iOS).
2. Ajouter le fichier de configuration client généré par le serveur.
3. Se connecter au VPN : vos requêtes passent maintenant via votre VPS, **sécurisées et anonymisées**.

![](/vpn-vps-dashboard.png)
*Exemple : interface de configuration WireGuard sur un client.*

---

## Mon retour

Depuis que j’ai configuré mon VPN sur un VPS :
- Mon trafic est **chiffré et sécurisé**, même sur des Wi-Fi publics.
- Mon IP réelle est **masquée**, ce qui renforce la confidentialité.
- Je peux **choisir la localisation** de mon serveur pour contourner certaines restrictions géographiques.
- J’ai **un contrôle total** sur mes données, contrairement à un service VPN classique.

---

En résumé, installer un VPN sur un VPS transforme votre connexion Internet en **tunnel privé**, sécurisé et sous votre contrôle complet. Vous protégez vos données, masquez votre IP et naviguez en toute confidentialité.

