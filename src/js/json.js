export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Recolección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas de recolección',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Identificación de fuentes de información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elaboración de instrumentos de recolección',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aplicación de métodos de recolección',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Documentación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Especificación de requisitos funcionales y no funcionales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Uso de plantillas y estándares',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Priorización y trazabilidad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Herramientas de control de versiones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis y modelado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de necesidades del cliente',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Creación de diagramas y prototipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de modelado de requisitos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Integración de puntos de vista en el diseño',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Validación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de validación con clientes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Revisión y ajustes de especificaciones',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Simulación de validaciones con casos de estudio',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Aplicación de protocolos aprobados',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Recolección y documentación de requisitos de <i>software</i>',
    Description:
      'Este componente aborda la recolección y documentación de requisitos de <i>software</i>, destacando técnicas para identificar y registrar necesidades del cliente de manera efectiva. Incluye métodos para especificar, priorizar y mantener la trazabilidad de los requisitos, así como herramientas de control de versiones. Se enfoca en el análisis, modelado y validación de requisitos para asegurar un diseño adecuado y funcional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
}
