// Días de actividades:

const dias = [
    {
        dia: "5 de Enero",
        actividades: [
            { hora: "09:00", evento: "Apertura del Congreso" },
            { hora: "11:00", evento: "Conferencia Magistral: Futuro de la Robótica" },
            { hora: "15:00", evento: "Taller: Robótica Educativa" },
        ]
    },
    {
        dia: "6 de Enero",
        actividades: [
            { hora: "10:00", evento: "Panel: Innovaciones en IA" },
            { hora: "14:00", evento: "Taller: Diseño de Robots Autónomos" },
        ]
    },
    {
        dia: "7 de Enero",
        actividades: [
            { hora: "09:00", evento: "Competencia de Robots" },
            { hora: "16:00", evento: "Mesa Redonda: Ética en la Robótica" },
        ]
    },
    {
        dia: "8 de Enero",
        actividades: [
            { hora: "10:00", evento: "Visita Guiada por las Ruinas" },
            { hora: "14:00", evento: "Clausura del Congreso" },
        ]
    }
];

let diaActual = 0;

// Mostrar actividades de un día
function mostrarDia() {
    const diaContainer = document.getElementById("dia-actual");
    const dia = dias[diaActual];

    let contenido = `<h3>${dia.dia}</h3><table><tr><th>Hora</th><th>Evento</th></tr>`;
    dia.actividades.forEach(actividad => {
        contenido += `<tr><td>${actividad.hora}</td><td>${actividad.evento}</td></tr>`;
    });
    contenido += "</table>";

    diaContainer.innerHTML = contenido;
}

// Navegar entre días
document.getElementById("prevDia").addEventListener("click", () => {
    diaActual = (diaActual > 0) ? diaActual - 1 : dias.length - 1;
    mostrarDia();
});

document.getElementById("nextDia").addEventListener("click", () => {
    diaActual = (diaActual < dias.length - 1) ? diaActual + 1 : 0;
    mostrarDia();
});

// Inicializar calendario
document.addEventListener("DOMContentLoaded", mostrarDia);
