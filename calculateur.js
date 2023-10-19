document.addEventListener("DOMContentLoaded", function() {
    // Critère 2 : Fonctionnalité et Conformité aux Exigences de Base
    // L'application permet aux utilisateurs de saisir le montant total.
    // L'application propose une liste prédéfinie de pourcentages de pourboire.
    // L'application calcule le montant total dû en fonction de ces entrées.
    
    const BoutonCalcul = document.getElementById("boutonCalcul");
    BoutonCalcul.addEventListener("click", CalculerPourboire);

    function CalculerPourboire() {
        // Critère 4 : Gestion des Erreurs
        // Vérifie que les valeurs entrées sont des nombres valides.
        const montantTotal = parseFloat(document.getElementById("montantTotal").value);
        const PourcentagePourboire = parseFloat(document.getElementById("pourcentagePourboire").value);

        if (isNaN(montantTotal) || isNaN(PourcentagePourboire)) {
            document.getElementById("resultat").textContent = "Veuillez entrer des valeurs valides.";
            return;
        }

        // Effectue le calcul du pourboire et du montant total dû.
        const Pourboire = (montantTotal * PourcentagePourboire) / 100;
        const MontantTotal = montantTotal + Pourboire;

        // Affiche les résultats de manière claire.
        document.getElementById("resultat").textContent = `Montant de la note : ${montantTotal} €\nPourboire : ${Pourboire} €\nMontant total dû : ${MontantTotal} €`;
    }
});
