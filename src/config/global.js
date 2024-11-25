export default {
  global: {
    componenteFormativo:
      'Recolección y documentación de requisitos de <i>software</i>',
    descripcionCurso:
      'Este componente aborda la recolección y documentación de requisitos de <i>software</i>, destacando técnicas para identificar y registrar necesidades del cliente de manera efectiva. Incluye métodos para especificar, priorizar y mantener la trazabilidad de los requisitos, así como herramientas de control de versiones. Se enfoca en el análisis, modelado y validación de requisitos para asegurar un diseño adecuado y funcional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
  complementario: [
    {
      tema: '1. Recolección de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023e, septiembre 7). <i>La fase de elicitación de requisitos</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-9NsuoSa_Ao',
    },
    {
      tema: '1. Recolección de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, 26 noviembre).<i> Diagramas para la especificación y análisis de requisitos: introducción<i/>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=N1zFo2-dmkU',
    },
    {
      tema: '2. Documentación de requisitos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, mayo 26). <i>Requerimientos y procesos del sistema de información</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7LYV0UoH82o',
    },
    {
      tema: '2. Documentación de requisitos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 25). <i>Construcción del informe de requisitos</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=F_sGSI26q88',
    },
    {
      tema: '3. Análisis y modelado',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023d, septiembre 7). <i>Análisis y especificación de requisitos</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Hmtriz7Af20',
    },
    {
      tema: '3. Análisis y modelado',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022a, diciembre 13).<i> Análisis de requisitos, procesos e información</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iSWz9b7HCEo',
    },
    {
      tema: '4. Validación de requisitos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 27). <i>Validación del informe de los requisitos según las directrices de negocio y solicitud del cliente</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6l13UShHdP8',
    },
    {
      tema: '4. Validación de requisitos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022b, diciembre 26). <i>Validación de requisitos</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AC_xUTvJ43Q',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de necesidades',
      significado:
        'Evaluación detallada de los requisitos del cliente para asegurar que se entiendan completamente antes de la implementación.',
    },
    {
      termino: 'Control de versiones',
      significado:
        'Sistema que gestiona los cambios realizados en los documentos y mantiene un historial de las revisiones.',
    },
    {
      termino: 'Diagrama',
      significado:
        'Representación gráfica que ayuda a visualizar procesos, estructuras de datos o interacciones del sistema.',
    },
    {
      termino: 'Fuentes de información',
      significado:
        'Personas, documentos o sistemas de los cuales se extrae información útil para definir requisitos de <i>software</i>.',
    },
    {
      termino: 'Informe de requisitos',
      significado:
        'Documento que describe en detalle los requisitos funcionales y no funcionales del sistema, incluyendo análisis y especificaciones técnicas.',
    },
    {
      termino: 'Instrumentos de recolección',
      significado:
        'Herramientas y formatos, como cuestionarios y guías de entrevistas, que facilitan la obtención de datos de manera estructurada.',
    },
    {
      termino: 'Plantillas y estándares',
      significado:
        'Documentos predefinidos y normas que aseguran la uniformidad y calidad en la especificación de requisitos.',
    },
    {
      termino: 'Priorización de requisitos',
      significado:
        'Proceso de clasificar los requisitos según su importancia y urgencia para el proyecto.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Modelo preliminar de la interfaz de usuario o funcionalidad del <i>software</i> que se usa para obtener retroalimentación y validar requisitos.',
    },
    {
      termino: 'Protocolos aprobados',
      significado:
        'Conjunto de procedimientos estándar que se siguen para realizar validaciones y asegurar la calidad de los requisitos.',
    },
    {
      termino: 'Puntos de vista',
      significado:
        'Diferentes perspectivas que se consideran en el diseño del sistema, como las necesidades del usuario, del cliente y del desarrollador.',
    },
    {
      termino: 'Recolección de datos',
      significado:
        'Proceso de obtener información relevante de diferentes fuentes para entender las necesidades del cliente y los requisitos del sistema.',
    },
    {
      termino: 'Requisitos funcionales',
      significado:
        'Describen las funciones específicas que el <i>software</i> debe realizar, como operaciones, cálculos o interacciones con el usuario.',
    },
    {
      termino: 'Requisitos no funcionales',
      significado:
        'Definen las cualidades del sistema, como rendimiento, seguridad, usabilidad y escalabilidad.',
    },
    {
      termino: 'Revisión de especificaciones',
      significado:
        'Evaluación de los documentos de requisitos para asegurar que sean precisos, completos y comprensibles.',
    },
    {
      termino: 'Simulación',
      significado:
        'Uso de modelos o escenarios para probar cómo se comportará el sistema en situaciones reales antes de su desarrollo.',
    },
    {
      termino: 'Técnicas de modelado',
      significado:
        'Métodos como diagramas de flujo, casos de uso o mapas de navegación, utilizados para representar requisitos de manera estructurada.',
    },
    {
      termino: 'Técnicas de recolección',
      significado:
        'Métodos utilizados para obtener datos, como entrevistas, encuestas, observación, y <i>focus group.</i>',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de rastrear cada requisito a lo largo de su ciclo de vida, desde la recolección hasta su implementación y pruebas.',
    },
    {
      termino: 'Validación de requisitos',
      significado:
        'Proceso de confirmar que los requisitos reflejan las expectativas del cliente y son viables para su desarrollo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ambler, S. W. (2002). The Agile Model Driven Development (AMDD) Process. Recuperado de ',
      link: 'https://www.agilemodeling.com/artifacts/amdd.html',
    },
    {
      referencia:
        'Davis, A. M. (2005). Software Requirements: Objects, Functions, and States. Prentice Hall.',
    },
    {
      referencia:
        'Gotel, O. C. Z., & Finkelstein, A. (1994). An analysis of the requirements traceability problem. In Proceedings of the First International Conference on Requirements Engineering (pp. 94-101). IEEE.',
    },
    {
      referencia:
        'Hoy, Z., & Xu, M. (2023, June 1). Agile Software Requirements Engineering Challenges-Solutions—A Conceptual Framework from Systematic Literature Review. Information (Switzerland). MDPI. ',
      link: 'https://doi.org/10.3390/info14060322',
    },
    {
      referencia:
        'IEEE. (1998). IEEE Std 830-1998: IEEE Recommended Practice for Software Requirements Specifications.',
    },
    {
      referencia:
        'Karlsson, J., & Ryan, K. (1997). A cost-value approach for prioritizing requirements. In Proceedings of the 2nd International Conference on Requirements Engineering (pp. 97-104). IEEE.',
    },
    {
      referencia:
        'Leffingwell, D., & Widrig, D. (2003). Managing Software Requirements: A Unified Approach. Addison-Wesley.',
    },
    {
      referencia:
        'López, M. (2018). Gestión de requisitos en proyectos de software: Un enfoque práctico. Ediciones Universidad de Salamanca.',
    },
    {
      referencia:
        'Martin, M. (2022). What is a Functional Requirement in Software Engineering? Specification, Types, Examples. Guru99.',
    },
    {
      referencia:
        'Melegati, J., Goldman, A., Kon, F., & Wang, X. (2019). A model of requirements engineering in software startups. Information and Software Technology, 109, 92–107. ',
      link: 'https://doi.org/10.1016/j.infsof.2019.02.001',
    },
    {
      referencia:
        'Pohl, K., & Rupp, C. (2011). Ingeniería de requisitos: Fundamentos, principios y técnicas. Springer.',
    },
    {
      referencia:
        'Rupp, C., & Pohl, K. (2010). Requirements Engineering: The Key to Successful Software Projects. Springer.',
    },
    {
      referencia:
        'Sommerville, I. (2016). Software Engineering (10th ed.). Pearson.',
    },
    {
      referencia:
        'Wiegers, K. E., & Beatty, J. (2013). Requisitos de software (3rd ed.). Microsoft Press.',
    },
  ],
}
