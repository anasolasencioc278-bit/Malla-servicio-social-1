const malla = [
  {
    semestre: "1º Semestre",
    ramos: [
      "introduccion al trabajo social",
      "antropologia general",
      "Computación básica",
      "Taller de vinculación laboral en contextos del trabajo social",
      "taller de nivelación matemáticas"
    ]
  },
  {
    semestre: "2º Semestre",
    ramos: [
      "Psicología evolutiva",
      "políticas publicas y sociales en chile",
      "taller de vinculación laboral Prog. Sociales e información social",
      "manejo de información",
      "familia",
      "desarrollo de habilidades comunicativas"
    ]
  },
  {
    semestre: "3º Semestre",
    ramos: [
      "Salud comunitaria",
      "Beneficios previsionales y de salud",
      "Taller de vinculación laboral y salud pública",
      "Legislación y trabajo social",
      "Grupos y comunidades",
      "Taller de desarrollo personal 1",
      "Ética profesional"
    ]
  },
  {
    semestre: "4º Semestre",
    ramos: [
      "Asministración general",
      "Taller de redes",
      "Taller de vinculación laboral RSE y medio ambiente",
      "Desarrollo local",
      "Técnicas administrativas presupuestarias",
      "Electivo formación profesional 1",
      "Taller de desarrollo personal 2"
    ]
  },
  {
    semestre: "5º Semestre",
    ramos: [
      "Economía y sociedad",
      "Planificación social",
      { nombre: "Elementos teóricos y metodológicos para la intervención en trabajo social", prereq: false },
      "Metodología de la investigación social",
      "Sociología general",
      "Ingles básico 1"
    ]
  },
  {
    semestre: "6º Semestre",
    ramos: [
      "Gestión de recursos humanos y beneficios laborales",
      "Taller de habilidades directivas",
      { nombre: "Módulos de integración teórico - practico de diagnostico social", prereq: true },
      "Taller de investigación aplicada",
      "Taller de preparación laboral",
      "Ingles básico 2"
    ]
  },
  {
    semestre: "7º Semestre",
    ramos: [
      "Taller de formulación y evaluación de proyectos sociales",
      { nombre: "Modulo de integración teórico - practico de intervención y evaluación social", prereq: true },
      "Taller de sistematización",
      "Electivo de formación profesional 2",
      "Cultura y valores"
    ]
  },
  {
    semestre: "8º Semestre",
    ramos: [
      { nombre: "Proyecto de titulo", clase: "proyecto" },
      { nombre: "Practica profesional integral", clase: "practica" },
      "Taller de competencias profesionales",
      "Electivo de formación profesional 3"
    ]
  }
];

function renderMalla() {
  const container = document.getElementById("malla");
  malla.forEach(sem => {
    const div = document.createElement("div");
    div.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = sem.semestre;
    div.appendChild(title);

    sem.ramos.forEach(ramo => {
      const r = document.createElement("div");
      const nombre = typeof ramo === "string" ? ramo : ramo.nombre;
      const claseExtra = typeof ramo === "object" && ramo.clase ? ramo.clase : "";

      r.textContent = nombre;
      r.className = "ramo no-aprobado " + claseExtra;

      if (typeof ramo === "object" && ramo.prereq) {
        r.className = "ramo prerequisito";
      }

      if (!r.classList.contains("prerequisito")) {
        r.addEventListener("click", () => {
          r.classList.toggle("aprobado");
          r.classList.toggle("no-aprobado");
        });
      }

      div.appendChild(r);
    });

    container.appendChild(div);
  });
}

renderMalla();
