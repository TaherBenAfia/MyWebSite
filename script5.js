// Fenêtres de dialogue
alert("Bienvenue sur Sport Live !");
let userName = prompt("Quel est votre nom ?");
if (userName) {
    alert("Bienvenue, " + userName + " !");
} else {
    alert("Bienvenue, visiteur !");
}

// Manipulation DOM
document.querySelector("h1").textContent += " - Suivez votre passion !";

// Ajout dynamique d'un élément
let newFeature = document.createElement("li");
newFeature.textContent = "Alertes personnalisées pour vos équipes préférées";
document.querySelector("#features ul").appendChild(newFeature);

// Événements
document.querySelector("img").onmouseover = () => {
    alert("Découvrez nos moments forts !");
};

document.querySelector("footer p a").onclick = (e) => {
    if (!confirm("Vous allez être redirigé vers un site externe. Continuer ?")) {
        e.preventDefault();
    }
};
