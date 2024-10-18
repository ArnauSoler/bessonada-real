// Grups de proves
const grupsProves = {
    foto: [
        "Feu-vos una foto amb cada una de les 4 companyes de pis de l’A&G",
        "Feu-vos una foto amb una altra bessonada (que no conegueu!) simulant un part de bessons",
        "Feu-vos una foto amb dues bessonades que creieu que van més matching que vosaltres",
        "Feu-vos 4 fotos llepant colzes de la gent sense que se n’adonin",
        "Feu-vos 3 fotos amb persones que portin el mateix color de roba interior",
        "Feu-vos una foto al mirall del lavabo amb més de 7 persones"
    ],
    noms: [
        "Trobeu 5 persones que comparteixin signe del zoodíac amb algun dels vostres.",
        "Trobeu 4 persones que s’hagin fet besos amb algú que també està a la festa",
        "Trobeu 5 persones que actualment facin esports diferents",
        "Trobeu 2 persones que es van oblidar de felicitar a l’A&G el dia del seu aniversari",
        "Trobeu 3 persones que siguin cinturó negre de taekwondo",
        "Trobeu 2 persones que faci més de 20 anys que coneixen a l’A&G i 2 que en faci menys de 2"
    ],
    anecdota: [
        "Que algú us expliqui una anècdota de l’Arnau o el Guillem a la primària",
        "Que algú us expliqui una anècdota de l’Arnau o el Guillem a la feina",
        "Que algú us expliqui una anècdota de l’Arnau o el Guillem de festa",
        "Que algú us expliqui una anècdota de l’Arnau o el Guillem a tinder",
        "Que algú us expliqui una anècdota de l’Arnau o el Guillem al GCCC",
        "Que algú us expliqui una anècdota de l’Arnau o el Guillem a la uni",
        "Que algú us expliqui una anècdota de l’Arnau o el Guillem a un AlcoleaFest"
    ],
    ridicul: [
        "Interromp una conversa casual i fes com si fossis un reporter de notícies en directe.",
        "Explica una història inventada i totalment ridícula sobre com vas conèixer l’Arnau i el Guillem.",
        "Demana un cubata només parlant en anglès a la barra.",
        "Canta una cançó hooligan a ple pulmó.",
        "Simula un flashmob en solitari al centre de la pista de ball."
    ],
    gomet: [
        "Doneu un gomet a una persona que ara diu “jo avui no em lio” però que segurament acabarà sortint de festa.",
        "Doneu un gomet a una persona que tornarà amb taxi a casa.",
        "Doneu un gomet a una persona que creieu que avui es farà bessos amb algú.",
        "Doneu un gomet a una persona que creieu que farà 4 o més cubates aquesta nit.",
        "Doneu un gomet a una persona que creieu que no dormirà a casa seva.",
        "Doneu un gomet a una persona que creieu que tardarà més d’una setmana en fer el bizum del sopar."
    ]
};

// Funció per seleccionar una prova de cada grup aleatòriament
function generaProvesAleatories() {
    let provesSeleccionades = {};

    // Seleccionem una prova aleatòria de cada grup
    for (let grup in grupsProves) {
        let proves = grupsProves[grup];
        let repteAleatori = proves[Math.floor(Math.random() * proves.length)];
        provesSeleccionades[grup] = repteAleatori;
    }

    return provesSeleccionades;
}

// Funció per generar proves i guardar-les a localStorage
function generaProves() {
    const participant1 = document.getElementById('participant1').value;
    const participant2 = document.getElementById('participant2').value;

    if (participant1 && participant2) {
        const parella = `${participant1}-${participant2}`;
        // Guardar els noms a localStorage
        localStorage.setItem('lastParticipant1', participant1);
        localStorage.setItem('lastParticipant2', participant2);

        // Mirem si ja hi ha proves guardades per aquesta parella
        let provesGuardades = localStorage.getItem(parella);
        let provesSeleccionades;

        if (provesGuardades) {
            provesSeleccionades = JSON.parse(provesGuardades);
        } else {
            // Si no hi ha proves guardades, en generem unes de noves
            provesSeleccionades = generaProvesAleatories();
            localStorage.setItem(parella, JSON.stringify(provesSeleccionades));  // Guardem les proves
        }

        // Mostrar les proves
        document.getElementById('reptes').innerHTML = `
            <h3>${participant1} i ${participant2}, les vostres proves són:</h3>
            <ul>
                <li><strong>Foto:</strong> ${provesSeleccionades.foto}</li>
                <li><strong>Noms:</strong> ${provesSeleccionades.noms}</li>
                <li><strong>Anècdota:</strong> ${provesSeleccionades.anecdota}</li>
                <li><strong>Ridícul:</strong> ${provesSeleccionades.ridicul}</li>
                <li><strong>Gomet:</strong> ${provesSeleccionades.gomet}</li>
            </ul>
        `;
    } else {
        alert('Introduïu els noms dels participants');
    }
}

// Funció per carregar els últims noms utilitzats
function carregaNoms() {
    const lastParticipant1 = localStorage.getItem('lastParticipant1');
    const lastParticipant2 = localStorage.getItem('lastParticipant2');

    if (lastParticipant1) {
        document.getElementById('participant1').value = lastParticipant1;
    }

    if (lastParticipant2) {
        document.getElementById('participant2').value = lastParticipant2;
    }
}

// Executar la funció de càrrega de noms quan es carrega la pàgina
window.onload = carregaNoms;
