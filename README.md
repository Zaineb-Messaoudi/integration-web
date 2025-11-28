# Application Web de Paiement et de Suivi

Cette application offre un **suivi de paiement en temps réel** avec des statuts clairs, des notifications instantanées et un historique consultable, permettant d’éliminer toute incertitude et les vérifications manuelles. Le système repose sur un **paiement hautement sécurisé** incluant chiffrement, authentification renforcée et détection de fraude en temps réel. L’interface est intuitive, fiable, et assure une **coordination fluide entre l’administration et la banque**, tandis qu’un **support intégré et réactif** accompagne rapidement l’utilisateur en cas de problème.

## 🚀 Installation & Configuration de Tailwind CSS

La méthode la plus simple pour démarrer est d’utiliser le **Tailwind CLI**.

## 1️⃣ Installer Tailwind CSS

Installez `tailwindcss` et `@tailwindcss/cli` :

```bash
npm install tailwindcss @tailwindcss/cli
````

## 2️⃣ Importer Tailwind dans votre fichier CSS

Ajoutez l’import Tailwind dans votre fichier CSS principal.

**src/input.css**

```css
@import "tailwindcss";
```

## 3️⃣ Lancer la compilation Tailwind

Exécutez :

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

## 4️⃣ Utiliser Tailwind dans votre HTML

Incluez le fichier compilé dans votre page.

**src/index.html**

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

## 🛠️ Technologies utilisées

* Tailwind CSS
* HTML5
* JavaScript
* Node.js (pour le CLI)


## 📌 Notes importantes

* Le mode `--watch` met à jour automatiquement le CSS.
* Assurez-vous que la structure des dossiers correspond à votre projet.
* `output.css` peut être personnalisé selon vos besoins.

