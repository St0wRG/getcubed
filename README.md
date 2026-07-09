# Cubed - calculateur de frais de stockage FBA

Application web autonome (un seul fichier `index.html`). Tout tourne cote navigateur : l'inventaire du vendeur ne quitte jamais sa page. Aucune dependance, aucun build.

## Lancer en local
- Double-cliquer `index.html`, ou
- Servir le dossier : `python -m http.server 8791 --directory .` puis ouvrir http://localhost:8791/index.html

## Mettre en ligne gratuitement (choisir une option)
1. **Netlify Drop (le plus simple)** : aller sur app.netlify.com/drop et glisser le dossier `app/`. En ligne en 30 secondes, URL fournie. Domaine perso possible ensuite.
2. **GitHub Pages** : pousser le dossier dans un repo, activer Pages sur la branche. Gratuit.
3. **Vercel** : `vercel` dans le dossier, ou import du repo.

## Activer la capture d'email (2 minutes)
Par defaut le formulaire valide l'adresse mais n'envoie rien (pas de faux envoi). Pour l'activer, deux voies :

### Option A - Formspree (marche partout, recommande)
1. Creer un formulaire sur formspree.io, recuperer l'URL (ex : https://formspree.io/f/xxxx).
2. Dans `index.html`, sur la balise `<form id="leadForm" ...>` : mettre `data-endpoint="https://formspree.io/f/xxxx"` et `data-ready="true"`.
C'est tout. Les emails arrivent dans Formspree (puis exportables vers ton outil d'emailing).

### Option B - Netlify Forms (si heberge sur Netlify)
Le formulaire est deja pre-equipe (`data-netlify="true"` + honeypot). Il suffit de :
1. Mettre `data-endpoint="/"` et `data-ready="true"` sur la balise `<form>`.
2. Deployer sur Netlify. Les soumissions apparaissent dans l'onglet Forms du site.

## Brancher un vrai outil d'emailing
Formspree/Netlify servent a demarrer et a mesurer la demande. Des que le flux est valide, connecter vers Brevo, MailerLite ou ConvertKit (webhook ou export CSV) pour envoyer le plan d'action et les rappels avant chaque 14 du mois.

## Maintenance des baremes
Les taux sont editables dans l'onglet Parametres de l'app (section repliable). Ils doivent rester alignes avec le tableur `../Tableur-Audit-FBA-Q4.xlsx`. A revoir a chaque changement de grille Amazon (rythme : mensuel, role SCOUT). Seuil 181 j confirme US ; seuils EU a confirmer sur un compte reel.

## Repere de marque
- Nom : Cubed (l'unite qui facture : le pied cube / m3).
- Couleurs : pin `#0F5C46` / `#082A20`, ambre `#E8A020`, kraft `#C9B896`, avoine `#F2F3EE`, encre `#1A1F1C`.
- Typo : serif (titres + montants), sans (interface), mono (SKU).
- A faire : favicon (le cube du logo en SVG est deja dans le header), un vrai nom de domaine.
