const proves = [
    "Cantar una cançó junts",
    "Fer una volta corrent al voltant de la casa",
    "Ballar durant 1 minut",
    "Recitar un poema improvisat",
    "Explicar un acudit",
    "Fer una selfie creativa",
    "Interpretar una escena de pel·lícula"
];

// Funció per generar proves i guardar-les a localStorage
function generaProves() {
    const participant1 = document.getElementById('participant1').value;
    const participant2 = document.getElementById('participant2').value;

    if (participant1 && participant2) {
        const parella = `${participant1}-${participant2}`;
        // Mirem si ja hi ha una prova guardada per aquesta parella
        let repte = localStorage.getItem(parella);

        if (!repte) {
            // Si no hi ha cap prova guardada, en generem una nova
            repte = proves[Math.floor(Math.random() * proves.length)];
            localStorage.setItem(parella, repte);  // Guardem la prova a localStorage
        }

        document.getElementById('reptes').innerHTML = `
            <h3>${participant1} i ${participant2}, el vostre repte és:</h3>
            <p>${repte}</p>
        `;
    } else {
        alert('Introduïu els noms dels participants');
    }
}
