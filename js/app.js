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
            { codice: "CDA/001", file: "CDA001.pdf", scuola: "Scuola primaria istituto comprensivo Michele Lessona, Torino", classe: "Classe IV Sezione F" },
            { codice: "CDA/013", file: "CDA013.pdf", scuola: "Scuola primaria istituto comprensivo Michele Lessona, Torino", classe: "Classe IV Sezione A" }
        ]
    },

    {
        nome: "Mondragone",
        regione: "Campania",
        lat: 41.1132,
        lng: 13.8937,
        pdf: [
            { codice: "CDA/002", file: "CDA002.pdf", scuola: "Scuola secondaria di primo grado istituto comprensivo Mondragone 3, Mondragone (CE)", classe: "Classe I Sezione A" }
        ]
    },

    {
        nome: "Napoli",
        regione: "Campania",
        lat: 40.8518,
        lng: 14.2681,
        pdf: [
            { codice: "CDA/007", file: "CDA007.pdf", scuola: "Scuola secondaria di primo grado istituto comprensivo Alpi Levi, Napoli", classe: "Classe I-II Sezione C" }
        ]
    },

    {
        nome: "Novoli",
        regione: "Puglia",
        lat: 40.3781,
        lng: 18.0485,
        pdf: [
            { codice: "CDA/003", file: "CDA003.pdf", scuola: "Scuola primaria e secondaria di primo grado istituto comprensivo Margherita Hack, Novoli (LE)", classe: "Classe V, I, II, III Sezione CCRR" }
        ]
    },

    {
        nome: "Palagiano",
        regione: "Puglia",
        lat: 40.5789,
        lng: 17.0379,
        pdf: [
            { codice: "CDA/006", file: "CDA006.pdf", scuola: "Scuola primaria istituto comprensivo Rodari-Giovanni XXIII, Palagiano (TA)", classe: "Classe IV Sezione A-B" }
        ]
    },

    {
        nome: "Taurisano",
        regione: "Puglia",
        lat: 39.9597,
        lng: 18.2144,
        pdf: [
            { codice: "CDA/012", file: "CDA012.pdf", scuola: "Scuola primaria istituto comprensivo Taurisano polo 1 plesso G. Carducci, Taurisano (LE)", classe: "Classe IV Sezione A-B" }
        ]
    },

    {
        nome: "Paceco",
        regione: "Sicilia",
        lat: 37.9786,
        lng: 12.5578,
        pdf: [
            { codice: "CDA/004", file: "CDA004.pdf", scuola: "Scuola primaria istituto comprensivo Giovanni XXIII, Paceco (TP)", classe: "Classe IV Sezione C-D" },
            { codice: "CDA/005", file: "CDA005.pdf", scuola: "Scuola primaria istituto comprensivo Giovanni XXIII, Paceco (TP)", classe: "Classe V" }
        ]
    },

    {
        nome: "Leonforte",
        regione: "Sicilia",
        lat: 37.6439,
        lng: 14.3997,
        pdf: [
            { codice: "CDA/008", file: "CDA008.pdf", scuola: "Scuola secondaria di primo grado istituto comprensivo Dante Alighieri, Leonforte (EN)", classe: "Classe II Sezione G" },
            { codice: "CDA/009", file: "CDA009.pdf", scuola: "Scuola secondaria di primo grado istituto comprensivo Dante Alighieri, Leonforte (EN)", classe: "Classe I Sezione D" },
            { codice: "CDA/010", file: "CDA010.pdf", scuola: "Scuola secondaria di primo grado istituto comprensivo Dante Alighieri, Leonforte (EN)", classe: "Classe II Sezione D" }
        ]
    },

    {
        nome: "Troina",
        regione: "Sicilia",
        lat: 37.7833,
        lng: 14.6000,
        pdf: [
            { codice: "CDA/011", file: "CDA011.pdf", scuola: "Scuola primaria istituto omnicomprensivo don Bosco-Majorana plesso San Michele, Troina (EN)", classe: "Classe IV Sezione F" }
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
                📄 ${documento.codice} — ${documento.scuola}, ${documento.classe}
            </a>
            <br>
        `;
    });

    const marker = L.marker([luogo.lat, luogo.lng]);

    marker.addTo(map);
    marker.bindPopup(contenuto);
});
