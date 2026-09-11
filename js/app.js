// ======================================================
// CRONACHE DELL'ACQUA
// MAPPA INTERATTIVA
// ======================================================

// Base URL della release GitHub dove sono caricati i PDF
const PDF_BASE_URL = "https://github.com/mrt-24/Cronachedell-Acqua/releases/download/v1.0/";

const map = L.map('map').setView([42.5, 12.5], 6);

const moderna = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
);

moderna.addTo(map);

// ------------------------------------------------------
// DATI DELLE CITTÀ
// ------------------------------------------------------

const citta = [
    {
        nome: "Torino",
        regione: "Piemonte",
        lat: 45.0703,
        lng: 7.6869,
        pdf: [
            { codice: "CDA/001", file: "CDA001.pdf" },
            { codice: "CDA/013", file: "CDA013.pdf" }
        ]
    },

    {
        nome: "Mondragone",
        regione: "Campania",
        lat: 41.1132,
        lng: 13.8937,
        pdf: [
            { codice: "CDA/002", file: "CDA002.pdf" }
        ]
    },

    {
        nome: "Napoli",
        regione: "Campania",
        lat: 40.8518,
        lng: 14.2681,
        pdf: [
            { codice: "CDA/007", file: "CDA007.pdf" }
        ]
    },

    {
        nome: "Novoli",
        regione: "Puglia",
        lat: 40.3781,
        lng: 18.0485,
        pdf: [
            { codice: "CDA/003", file: "CDA003.pdf" }
        ]
    },

    {
        nome: "Palagiano",
        regione: "Puglia",
        lat: 40.5789,
        lng: 17.0379,
        pdf: [
            { codice: "CDA/006", file: "CDA006.pdf" }
        ]
    },

    {
        nome: "Taurisano",
        regione: "Puglia",
        lat: 39.9597,
        lng: 18.2144,
        pdf: [
            { codice: "CDA/012", file: "CDA012.pdf" }
        ]
    },

    {
        nome: "Paceco",
        regione: "Sicilia",
        lat: 37.9786,
        lng: 12.5578,
        pdf: [
            { codice: "CDA/004", file: "CDA004.pdf" },
            { codice: "CDA/005", file: "CDA005.pdf" }
        ]
    },

    {
        nome: "Leonforte",
        regione: "Sicilia",
        lat: 37.6439,
        lng: 14.3997,
        pdf: [
            { codice: "CDA/008", file: "CDA008.pdf" },
            { codice: "CDA/009", file: "CDA009.pdf" },
            { codice: "CDA/010", file: "CDA010.pdf" }
        ]
    },

    {
        nome: "Troina",
        regione: "Sicilia",
        lat: 37.7833,
        lng: 14.6000,
        pdf: [
            { codice: "CDA/011", file: "CDA011.pdf" }
        ]
    }
];

// ------------------------------------------------------
// CREAZIONE DEI MARKER E DEI POPUP
// ------------------------------------------------------

citta.forEach(function(luogo) {

    let contenuto = `
        <div class="popup-titolo">${luogo.nome}</div>
        <div class="popup-regione">${luogo.regione}</div>
        <strong>Documenti:</strong><br>
    `;

    luogo.pdf.forEach(function(documento) {
        contenuto += `
            <a
                class="pdf-link"
                href="${PDF_BASE_URL}${documento.file}"
                target="_blank"
                rel="noopener"
            >
                📄 ${documento.codice}
            </a>
            <br>
        `;
    });

    const marker = L.marker([luogo.lat, luogo.lng]);

    marker.addTo(map);
    marker.bindPopup(contenuto);
});

// ------------------------------------------------------
// LEGENDA (immagine in un angolo della mappa)
// ------------------------------------------------------

const legenda = L.control({ position: 'bottomright' });

legenda.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'legenda-mappa');
    div.innerHTML = `<img src="img/legenda.png" alt="Legenda" style="width: 150px; display: block;">`;
    return div;
};

legenda.addTo(map);
