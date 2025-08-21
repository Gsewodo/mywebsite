---
id: "pi-hole.md"
title: "Installer un Pi-hole sur mon Raspberry Pi (avec AdGuard Home)"
badge: "pi-hole"
image: "/adguard.jpeg"
date: "2025-08-13"
readTime: "3 min"
description: "Je me suis lancé dans la cybersécurité avec une idée simple : commencer par sécuriser mon réseau à la maison, la première question que je me suis posée : comment bloquer les publicités et protéger un peu mieux mes données quand je navigue ? La solution que j’ai testée : "
---
## installer AdGuard Home sur mon Raspberry Pi  
Pour bien comprendre ce que fait AdGuard Home, il faut déjà parler un peu de ce qu’est un DNS. Quand on tape une adresse comme `wikipedia.org` dans son navigateur, il faut bien que l’ordinateur sache où aller. Le **Domain Name System** traduit ce nom de domaine lisible par l’humain en une **adresse IP** compréhensible par la machine.  
👉 Exemple :  
```
wikipedia.org → 208.80.154.224
```
Sans DNS, il faudrait retenir uniquement des suites de chiffres. Pas très pratique.  
---
Maintenant, imaginez qu’on détourne volontairement ce mécanisme.
 Un **DNS sinkhole**  est un serveur qui va répondre avec une fausse adresse IP quand il reconnaît un domaine indésirable.  
👉 Exemple :  
```
Requête → ads.truc.com  
Réponse → 0.0.0.0
```
Résultat : la pub ne se charge pas, elle disparaît tout simplement. Et c’est exactement le rôle qu’AdGuard Home va jouer dans mon réseau local.  
---
### AdGuard Home
![](/adguardHome/adGuard.jpg)  
*Exemple : logo de adguard home*  
C’est un logiciel qui s’installe comme **intermédiaire** entre mes appareils et les serveurs DNS publics. Il filtre d’abord toutes les requêtes : si le domaine est indésirable, il répond directement avec une adresse factice (`0.0.0.0`). Si le domaine est autorisé, il transmet la requête à un **serveur DNS en amont (upstream)** comme Cloudflare, Google ou Quad9, qui renvoie l’adresse correcte.  


Un **DNS sécurisé (DoH)**

Si vous n’avez jamais modifié vos paramètres DNS, tout le trafic de votre réseau passe par votre fournisseur d’accès à internet (FAI). Autrement dit, il peut voir tous les sites que vous consultez en ligne. C’est là qu’intervient le **DNS over HTTPS (DoH)**. Avec DoH, les requêtes DNS envoyées par AdGuard Home vers les serveurs upstream sont **chiffrées** grâce au protocole **HTTPS** 

**En pratique :**  
```
 DNS classique → vos requêtes sont lisibles en clair par votre FAI.  
```
```
 DNS via DoH → vos requêtes sont chiffrées.  
```

---
**AdGuard Home** ne se limite pas au simple blocage des publicités et trackers.  
Il permet également de :  

 **consulter des statistiques détaillées en temps réel** : 

![](/adguardHome/ad4.png)  
*Exemple : le tableau de bord d’AdGuard Home, avec les statistiques de requêtes bloquées.*  


**choisir ses serveurs DNS upstream** :
![](/adguardHome/ad1.png)  
*Exemple : configuration de serveurs DNS upstream.*  

  **bloquer des services entiers** (Facebook, Instagram, TikTok…) : 
![](/adguardHome/ad3.png)  
*Exemple : blocage de services.*  
---

### Mon retour

Depuis l’installation d’AdGuard Home sur mon Raspberry Pi :  

- Mon réseau est **plus rapide**, car moins chargé en publicités et scripts superflus.  
- Mes requêtes DNS sont **sécurisées**, grâce à l’utilisation de DoH.  
- Mon réseau est **mieux protégé contre le tracking**.  
- Je peux aussi **bloquer certains services** quand j’ai besoin de rester concentré.  

---

En résumé, un simple Raspberry Pi devient, avec AdGuard Home, un **véritable bouclier réseau** : il protège contre les publicités, le suivi en ligne et la surveillance des fournisseurs d’accès.  
