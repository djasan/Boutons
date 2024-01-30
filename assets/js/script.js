const buttons=document.getElementsByClassName('btn');
const b1=document.getElementById('b1');
Array.from(buttons).forEach((button, index) => {
    button.addEventListener('click', () => {
      //en premier lieu je declare mes variables
        let currentValue = parseInt(b1.innerText);
        //en second lieu je declare mes foncions
        // Incrémenter ou décrémenter en fonction de l'index du bouton
        if (index === 0) {
            // Bouton1 (index 0) => décrémentation
            currentValue--;
        } else {
            // Bouton2 (index 1) => incrémentation
            currentValue++;
        }

        // Mettre à jour la valeur affichée
        b1.innerText = currentValue;
    });
});
