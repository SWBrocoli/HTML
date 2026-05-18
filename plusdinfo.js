function AffichageTexte(){ 
    document.getElementById("myhand").style.fontSize="20px"; 
    document.getElementById("myhand").style.color="black"; 
    document.getElementById("myhand").style.backgroundColor="skyblue"; 
    document.getElementById("myhand").innerHTML="Adresse : 17 Bd Flandres Dunkerque 1940, 56100 Lorient"; }
function Affichagenumber(){
   document.getElementById("myhands").textContent = new Date().toLocaleString("fr-FR", { 
            weekday: "long", 
            year: "numeric",
            month: "long", 
            day: "numeric", 
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit"
            });
}