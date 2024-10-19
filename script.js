// Sélectionner le formulaire
const form = document.getElementById('formation-form');

// Ajouter un événement submit au formulaire
form.addEventListener('submit', (e) => {
  // Empêcher la soumission par défaut
  e.preventDefault();

  // Récupérer les valeurs des champs
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const entreprise = document.getElementById('entreprise').value;
  const formation = document.getElementById('formation').value;

  // Valider les champs
  if (nom === '' || prenom === '' || email === '' || telephone === '' || entreprise === '' || formation === '') {
    alert('Veuillez remplir tous les champs obligatoires.');
    return;
  }
// Valider l'email
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(email)) {
    alert('Adresse email invalide.');
    return;
  }

  // Valider le téléphone
  const regexTelephone = /^[\+]?[0-9]{3}[-\. ]?[0-9]{3}[-\. ]?[0-9]{4}$/;
  if (!regexTelephone.test(telephone)) {
    alert('Numéro de téléphone invalide.');
    return;
  }

  // Envoyer les données au serveur
  const données = {
    nom,
    prenom,
    email,
    telephone,
    entreprise,
    formation
  };
// Exemple d'envoi des données en utilisant fetch
  fetch('/https://mocky.io/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(données)
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});
