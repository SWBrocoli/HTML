document.addEventListener("DOMContentLoaded", () => { 
    const descriptions = { 
        "droit.jpg": "foot",
        "iut vannes.jpg": "foot",
        "lettres.jpg": "hand",
        "pontivy.jpg": "numero",
        "ensibs_lorient.jpg": "j'adore",
        "iae.jpeg": "Librer" }; 

        const zone = document.getElementById("description-text"); 
        document.addEventListener("click", (e) => { 
            const nom = e.target.getAttribute("src"); 
            zone.textContent = descriptions[nom] || "Aucune description disponible."; 
        }); 
    });