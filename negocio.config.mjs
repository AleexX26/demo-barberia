// ÚNICO archivo de datos del negocio. Edita aquí y ejecuta `node build.mjs`.
// Todo lo de este archivo es DE EJEMPLO (negocio ficticio) hasta que pongas los datos reales.

export default {
  // true = web de demostración: noindex, robots «Disallow: /» y avisos de «datos de ejemplo».
  demo: true,

  // Dominio definitivo, sin barra final. Se usa en canonical, Open Graph, sitemap y JSON-LD.
  dominio: 'https://demo-barberia.example',

  nombre: 'Casa Ferro',
  // Frase corta bajo el H1 y en la meta description.
  lema: 'Corte clásico, degradados y afeitado a navaja con toalla caliente. Sin prisas y con cita.',
  ciudad: 'Leganés',

  direccion: {
    calle: 'Calle de Ejemplo, 12',
    codigoPostal: '28911',
    ciudad: 'Leganés',
    provincia: 'Madrid',
    pais: 'ES',
  },
  // Coordenadas del local (clic derecho en Google Maps → copiar). Ahora: centro de Leganés.
  coordenadas: { lat: 40.3281, lng: -3.7635 },
  // Enlace de «Cómo llegar». Vacío = se genera con las coordenadas.
  mapsUrl: '',

  telefono: '+34 600 000 000',
  // Número que recibe las reservas por WhatsApp (puede ser el mismo).
  whatsapp: '+34 600 000 000',
  instagram: 'https://www.instagram.com/',
  email: '',

  // Horario: tramos [apertura, cierre] por día. [] = cerrado.
  horario: {
    lunes: [],
    martes: [['10:00', '14:00'], ['16:00', '20:30']],
    miercoles: [['10:00', '14:00'], ['16:00', '20:30']],
    jueves: [['10:00', '14:00'], ['16:00', '20:30']],
    viernes: [['10:00', '20:30']],
    sabado: [['09:30', '14:30']],
    domingo: [],
  },
  // Días de cierre puntuales (festivos, vacaciones): 'AAAA-MM-DD'. No se pueden reservar.
  cierres: ['2026-11-02', '2026-12-08', '2026-12-25', '2027-01-01', '2027-01-06'],

  reserva: {
    diasVista: 21, // cuántos días hacia delante se ofrecen
    intervaloMinutos: 30, // cada cuánto empieza una cita
    antelacionMinutos: 60, // no se ofrecen horas que empiecen antes de ahora + esto
  },

  // Servicios agrupados. precio en euros, duracion en minutos.
  servicios: [
    {
      grupo: 'Corte',
      items: [
        { id: 'corte', nombre: 'Corte', detalle: 'Tijera o máquina, lavado y peinado.', precio: 16, duracion: 30 },
        { id: 'degradado', nombre: 'Degradado', detalle: 'Fade a navaja o a cero, con acabado a tijera.', precio: 18, duracion: 40 },
        { id: 'infantil', nombre: 'Corte infantil', detalle: 'Hasta 12 años.', precio: 12, duracion: 25 },
      ],
    },
    {
      grupo: 'Barba',
      items: [
        { id: 'barba', nombre: 'Arreglo de barba', detalle: 'Perfilado a navaja y aceite.', precio: 12, duracion: 20 },
        { id: 'afeitado', nombre: 'Afeitado clásico', detalle: 'Toalla caliente, navaja y bálsamo.', precio: 18, duracion: 30 },
      ],
    },
    {
      grupo: 'Combinados',
      items: [
        { id: 'corte-barba', nombre: 'Corte y barba', detalle: 'El servicio más pedido.', precio: 24, duracion: 45 },
        { id: 'ritual', nombre: 'Ritual completo', detalle: 'Corte, afeitado clásico y masaje facial.', precio: 32, duracion: 60 },
      ],
    },
  ],

  // Barberos. noTrabaja: días de la semana en que no tiene agenda.
  barberos: [
    { id: 'dani', nombre: 'Dani Ferro', puesto: 'Fundador', especialidad: 'Afeitado a navaja y barba clásica', foto: 'equipo-1', alt: 'Dani, barbero, sujeta unas tijeras hacia la cámara en blanco y negro', noTrabaja: [] },
    { id: 'raul', nombre: 'Raúl Ortega', puesto: 'Barbero', especialidad: 'Degradados y peinados con textura', foto: 'equipo-2', alt: 'Raúl, barbero con gafas, termina un peinado con laca en el sillón', noTrabaja: ['sabado'] },
    { id: 'marco', nombre: 'Marco Ibáñez', puesto: 'Barbero', especialidad: 'Corte a tijera y cortes infantiles', foto: 'equipo-3', alt: 'Marco, barbero con delantal, concentrado durante un corte', noTrabaja: ['martes'] },
  ],

  // Valoración de Google. Pon nota: null para ocultarla. NUNCA va al JSON-LD.
  valoracion: { nota: 4.9, opiniones: 128, url: '' },

  // Opiniones. En producción, copia reseñas reales (con permiso) o quita la sección.
  opiniones: [
    { texto: 'Llevo dos años viniendo y el degradado sale igual cada vez. Pides cita por WhatsApp, te contestan enseguida y no esperas ni cinco minutos.', autor: 'Javier M.' },
    { texto: 'El afeitado con toalla caliente es otra cosa. Salí como nuevo.', autor: 'Andrés P.' },
    { texto: 'Mi hijo odiaba cortarse el pelo. Con Marco se sienta solo.', autor: 'Laura G.' },
  ],

  preguntas: [
    { p: '¿Hace falta pedir cita?', r: 'Recomendable, sobre todo viernes por la tarde y sábados. Pide cita desde esta web y te la confirmamos por WhatsApp. Si pasas sin cita, te atendemos en cuanto haya un hueco.' },
    { p: '¿Cómo sé que mi cita está confirmada?', r: 'Al enviar el formulario se abre WhatsApp con tu solicitud ya escrita. La cita queda pendiente hasta que te respondamos confirmándola, normalmente en menos de una hora en horario de apertura.' },
    { p: '¿Cómo cambio o cancelo una cita?', r: 'Escríbenos por WhatsApp o llámanos, mejor con unas horas de antelación, y te la movemos a otro hueco.' },
    { p: '¿Cuánto dura un corte?', r: 'Un corte son unos 30 minutos y corte y barba unos 45. En la carta de servicios tienes la duración de cada uno.' },
    { p: '¿Cómo puedo pagar?', r: 'En el local, con tarjeta, móvil o efectivo. No cobramos nada por adelantado.' },
    { p: '¿Cortáis el pelo a niños?', r: 'Sí, a partir de 3 años. El corte infantil es hasta los 12.' },
    { p: '¿Hay aparcamiento cerca?', r: 'Hay zona de aparcamiento en las calles de alrededor y un parking público a cinco minutos andando.' },
  ],

  // Fotos (en src/img, en WebP a varios tamaños: nombre-ANCHO.webp).
  fotos: {
    hero: { nombre: 'hero', anchos: [600, 900, 1200], ratio: [4, 5], alt: 'Barbero recortando con tijera la barba de un cliente recostado en el sillón' },
    galeria: [
      { nombre: 'navaja', anchos: [480, 960], ratio: [4, 5], alt: 'Degradado en la nuca marcado con navaja' },
      { nombre: 'local', anchos: [480, 960, 1440], ratio: [3, 2], alt: 'Interior de la barbería con tres sillones de cuero negro frente a espejos' },
      { nombre: 'barba', anchos: [480, 960], ratio: [4, 5], alt: 'Recorte de barba con tijera en blanco y negro' },
      { nombre: 'herramientas', anchos: [480, 960], ratio: [3, 2], alt: 'Tijeras, peine, máquinas y productos de barbería sobre una pizarra' },
      { nombre: 'tijera', anchos: [480, 960], ratio: [4, 5], alt: 'Corte a tijera sobre peine en la parte superior de la cabeza' },
      { nombre: 'maquina', anchos: [480, 960], ratio: [3, 2], alt: 'Barbero con brazos tatuados repasando la nuca con máquina' },
    ],
    contacto: { nombre: 'lamparas', anchos: [480, 960], ratio: [4, 5], alt: 'Fila de sillones de barbero bajo lámparas colgantes encendidas' },
    og: 'og.jpg', // 1200×630 para redes sociales
  },

  // Créditos de las fotos de ejemplo (licencia Unsplash). Vacía la lista al usar fotos propias.
  creditos: [
    { autor: 'Allef Vinicius', url: 'https://unsplash.com/photos/IvQeAVeJULw' },
    { autor: 'Agustin Fernandez', url: 'https://unsplash.com/photos/1Pmp9uxK8X8' },
    { autor: 'Nathon Oski', url: 'https://unsplash.com/photos/EW_rqoSdDes' },
    { autor: 'Nathon Oski', url: 'https://unsplash.com/photos/fE42nRlBcG8' },
    { autor: 'Andrea Donato', url: 'https://unsplash.com/photos/MNu0n-3BIKs' },
    { autor: 'Gulom Nazarov', url: 'https://unsplash.com/photos/DrG4V5skbMY' },
    { autor: 'Hai Phung', url: 'https://unsplash.com/photos/m4Pd_e-4zKs' },
    { autor: 'Eugene Chystiakov', url: 'https://unsplash.com/photos/taZSJ6xmt48' },
    { autor: 'Jeppe Mønster', url: 'https://unsplash.com/photos/T_gTN3Po9RQ' },
    { autor: 'Eye Speak', url: 'https://unsplash.com/photos/8MpCPbGoXgY' },
    { autor: 'Jason Leung', url: 'https://unsplash.com/photos/2seUdPQNy_I' },
  ],
};
