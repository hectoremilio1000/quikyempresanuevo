const servicios = [
  {
    id: "1",
    titulo: "Prueba COVID PCR en tiempo real",
    category: "covid",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/sanmateo/servicios/PCR.jpg",
    precio: 1500,
    oldPrice: 1800,
    descripcionLarga:
      "Método específico para determinar la presencia del virus. Idealmente se utiliza en pacientes que presentan síntomas agudos para confirmar la enfermedad. Es recomendada si el paciente tuvo contacto con una persona diagnosticada, incluso si no presenta síntomas. Se requiere la recolección de células infectadas de la nasofaringe y orofaringe del paciente mediante un hisopo. Se requiere ayuno de 4- 5 horas.",
    descripcioncorta: "Crees tener COVID-19 y tienes o no síntomas.",
    resultados: "RESULTADOS EN 24 a 48 horas",
    comentarios:
      "Prueba más confiable para detectar VIRUS COVID-19. Es la prueba solicitada para fines de viajes e intervenciones médicas, entre otras.",
    tipoMuestra: "Muestra de nariz y garganta",
    requerimiento: "Ninguno",
    creadoPorPrueba: "LUZ MARIA",
  },
  {
    id: "2",
    titulo: "PRUEBA DE ANTÍGENO (prueba rápida)",
    category: "covid",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/sanmateo/servicios/antigeno.jpg",
    precio: "",
    oldPrice: "",
    tiempoResultado: 30,
    descripcion:
      "Una prueba rápida de antígenos o prueba rápida es una prueba de diagnóstico rápida que directamente detecta la presencia o ausencia de un antígeno, en este caso para detectar la presencia de SARS-CoV-2, el virus que causa COVID-19. Las pruebas rápidas son un tipo de pruebas de flujo lateral que detectan proteínas, lo que las distingue de otras pruebas médicas que detectan anticuerpos (pruebas de anticuerpos) o ácido nucleico (pruebas de ácido nucleico), de tipo laboratorio o punto de atención.",
    descripcioncorta: "Crees tener COVID-19 y tienes o no síntomas.",
    resultados: "RESULTADOS EN 2 horas",
    comentarios:
      "Si tu resultado es POSITIVO se confirma COVID-19. Si tu resultado es NEGATIVO es necesario realizar una PRUEBA DE PCR",
    tipoMuestra: "Muestra de nariz",
    requerimiento: "Ninguno",
  },
  {
    id: "3",
    titulo: "PRUEBA DE ANTICUERPOS CUANTITATIVO",
    category: "covid",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/sanmateo/servicios/anticuerpos.jpg",
    precio: 800,
    oldPrice: 980,
    tiempoResultado: 30,
    descripcion:
      "Prueba realizada por metodología de electroquimioluminiscencia para la detección de anticuerpos totales cuantitativos anti SARS-CoV-2. También llamada prueba serológica cuantitativa; el resultado indica la cantidad de anticuerpos presentes en la sangre del paciente que se pueden producir como respuesta a la infección por el virus SARS-CoV-2 o por efecto de la vacunación.                                                                                                                                                                                               Se analiza la presencia de inmunoglobulinas IgM (que aparecen entre 7 y 10 días después del contacto con el virus) e IgG (que aparecen entre 10 y 15 días después).",
    descripcioncorta: "Crees tener COVID-19 y tienes o no síntomas.",
    resultados: "RESULTADOS DE 24 horas a 48 horas",
    comentarios:
      "Prueba post-vacuna o post-infección para conocer cuantos anticuerpos totales ANTICOVID (cuantitativamente) tienes en tu cuerpo",
    tipoMuestra: "Muestra de sangre",
    requerimiento: "Ninguno",
  },
  {
    id: "4",
    titulo: "Grupo Sanguíneo y RH",
    category: "rapidas",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 60,
    oldPrice: 70,
    descripcion:
      "Es un método para indicarle cuál es el tipo de sangre que usted tiene. La determinación del grupo sanguíneo se realiza para que usted pueda donar sangre o recibir una transfusión de sangre de manera segura. También se realiza para ver si usted posee una sustancia llamada factor Rh en la superficie de sus glóbulos rojos. No se requiere ayuno para esta prueba.",
    descripcioncorta: "Quisieras saber que tipo de sangre y factor Rh eres.",
    resultados: "RESULTADOS EN dos horas",
    comentarios: "Es fundamental saber que tipo de sangre y factor contamos.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ninguno",
  },
  {
    id: "5",
    titulo: "Anticuerpos Anti-HIV",
    category: "rapidas",
    imagen:
      "https://imagenesrutalab.s3.amazonaws.com/sanmateo/sanmateonuevo/imagenesservicios/anticuerposantihiv/Anticuerpos+Anti-HIV.jpg",
    precio: 200,
    oldPrice: 210,
    descripcion:
      "Este examen clínico hace posible la detección de los anticuerpos Anti-VIH 1 y Anti-VIH-2, que indican la presencia del Virus de la Inmunodeficiencia Humana (VIH), y que es causante del Síndrome de Inmunodeficiencia Adquirida (SIDA).",
    descripcioncorta: ".",
    resultados: "RESULTADOS EN 60 minutos",
    comentarios:
      "Determina si tienes una infección por el virus de la inmunodeficiencia humana (VIH).",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "6",
    titulo: "VDRL",
    category: "rapidas",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 70,
    oldPrice: 85,
    descripcion:
      "Es un examen para detectar sífilis, entre otras enfermedades. Mide sustancias (proteínas), llamadas anticuerpos, que su cuerpo puede producir si usted entra en contacto con la bacteria que causa la sífilis.",
    descripcioncorta: ".",
    resultados: "RESULTADOS EN 2 horas",
    comentarios:
      "La Sífilis es una enfermedad de transmisión sexual transmitida por una bacteria.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "7",
    titulo: "Prueba Inmunológica de Embarazo (PIE)",
    category: "rapidas",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 100,
    oldPrice: 120,
    descripcion:
      "Es una prueba que mide una hormona llamada gonadotropina coriónica humana (GCH), producida durante el embarazo. Esta hormona aparece en la sangre y en la orina de las mujeres embarazadas incluso ya a los 10 días después de la concepción.",
    descripcioncorta: "Prueba que cualitativa de embarazo",
    resultados: "RESULTADOS EN 30 minutos",
    comentarios:
      "Este es una prueba sencilla cualitativa para detectar presencia de embarazo.",
    tipoMuestra: "Muestra de orina",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "8",
    titulo: "Prueba Antidoping (6 drogas)",
    category: "rapidas",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 380,
    oldPrice: 400,
    descripcion:
      "Prueba rápida para detección de abuso de drogas en panel múltiple de 6 elementos, con la que se podrá determinar el uso de cocaína, anfetaminas, marihuana. Panel multidroga empacado en sobre de aluminio que garantiza la integridad de la prueba así como su efectividad, incluye pipeta dosificadora que permite la manipulación segura de la muestra en cuestión.",
    descripcioncorta:
      "Prueba en la cual se hace la detección de 6 tipos de drogas.",
    resultados: "RESULTADOS EN 60 minutos",
    comentarios:
      "Este es una prueba sencilla cualitativa para detectar presencia de de 6 tipos de drogas.",
    tipoMuestra: "Muestra de orina",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "8",
    titulo: "Glucosa Capilar",
    category: "rapidas",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 60,
    oldPrice: 70,
    descripcion:
      "La glucosa capilar es una prueba en la que se evalúa el nivel de glucosa del momento por medio de una pequeña gota de sangre y un aparato para la lectura de la concentración de glucosa en la sangre.",
    descripcioncorta:
      "Esta prueba es una medición de glucosa de manera rápida por medio de un glucómetro",
    resultados: "RESULTADOS EN 10 minutos",
    comentarios: "Es la cantidad de azúcar en la sangre.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "9",
    titulo: "Tiempo de Sangrado",
    category: "rapidas",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 90,
    oldPrice: 110,
    descripcion:
      "El tiempo de sangría es un test global que evalúa la formación del tapón plaquetario que se forma como resultado de la adhesión de las plaquetas a la pared de los vasos y la subsiguiente agregación.",
    descripcioncorta:
      "La prueba del tiempo de sangrado se utiliza para evaluar la coagulación sanguínea de una persona.",
    resultados: "RESULTADOS EN 20 minutos",
    comentarios: "Evalúa la actividad plaquetaria en tu cuerpo.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "10",
    titulo: "Tiempo de Coagulación",
    category: "rapidas",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 90,
    oldPrice: 110,
    descripcion:
      "“Consiste en una prueba rápida que puede realizarse al lado de la persona antes, durante y después de la cirugía o de otros procedimientos médicos.",
    descripcioncorta:
      "La prueba del tiempo de coagulación se realiza con fines medicos o preoperatorios.",
    resultados: "RESULTADOS EN 10 minutos",
    comentarios: "Evalúa la actividad de la coagulación de tu cuerpo.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "11",
    titulo: "Biometría Hemática",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 110,
    oldPrice: 120,
    descripcion:
      "Este examen se hace a la sangre e inspecciona las células que la componen y están presentes en ella como los glóbulos rojos, encargados de transportar oxígeno; los glóbulos blancos, que combaten infecciones, y las plaquetas, que detienen hemorragias mediante la formación de coágulos.",
    resultados: "RESULTADOS EN el mismo día",
    comentarios:
      "La biometría hemática es un auxiliar en el diagnostico y seguimiento de anemias, leucemias, pacientes con quimioterapias, síndrome febril e infecciones.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ayuno mínimo de 8 horas y máximo de 10 horas",
  },
  {
    id: "12",
    titulo: "Hemoglobina Glicosilada",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 280,
    oldPrice: 300,
    descripcion:
      "La prueba de hemoglobina glicosilada es un análisis de sangre común utilizado para diagnosticar la diabetes tipo 1 y tipo 2. Si tienes diabetes, la prueba se utiliza también para controlar los niveles de glucosa en la sangre.",
    resultados: "RESULTADOS EN el mismo día",
    comentarios:
      "El resultado de una prueba de hemoglobina glicosilada indica el nivel promedio de glucosa en la sangre de los últimos dos o tres meses.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "No requiere ayuno",
  },
  {
    id: "13",
    titulo: "Química Sanguínea 3, 6, 12 y 24 elementos",
    imagen: "https://imagenesrutalab.s3.amazonaws.com/rutalab/PCR_vector.jpg",
    precio: 600,
    oldPrice: 700,
    descripcion:
      "“La química sanguínea es un análisis de la sangre realizado en el laboratorio para medir cantidades de ciertas sustancias en el organismo como sales, enzimas, grasas o lípidos, hormonas, azúcar o glucosa, proteínas, vitaminas y minerales.",
    descripcioncorta: "Química sanguínea básica",
    resultados: "RESULTADOS EN el mismo día",
    comentarios:
      "Esta prueba ayuda a diagnosticar ciertos problemas de salud. Si los resultados son anormales, puede apuntar a un problema que necesite ser tratado a la brevedad.",
    tipoMuestra: "Muestra sanguínea",
    requerimiento: "Ayuno mínimo de 8 horas y máximo de 10 horas",
  },
];

export default servicios;
