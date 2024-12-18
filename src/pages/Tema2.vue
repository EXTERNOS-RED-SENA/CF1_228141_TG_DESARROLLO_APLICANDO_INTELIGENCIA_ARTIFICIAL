<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Documentación de requisitos


    .row.bg10.align-items-center
      .px-lg-5.px-4
        .row.justify-content-center.mb-4
          .col-lg-3.my-lg-0.my-3.j1
            img.img-a.img-t(src='@/assets/curso/temas/21.png' alt='')    
          .col-lg-5.my-lg-0.my-3 
            .bg9.p-4.h-100.j1
              p.mb-0 La documentación de requisitos es fundamental en el desarrollo de #[i software], ya que establece un entendimiento claro y compartido de las expectativas del cliente y las funcionalidades necesarias. Este proceso no solo reduce la ambigüedad, sino que también facilita la evaluación y validación de los resultados en cada etapa del proyecto. En esta sección, se describen las mejores prácticas para documentar requisitos de manera estructurada, con ejemplos y técnicas que optimizan su gestión.
          .col-lg-4.my-lg-0.my-3.j1
            img.img-a.img-t(src='@/assets/curso/temas/22.png' alt='')  

        Separador 
        #t_2_1.titulo-segundo.color-acento-contenido
          h2 2.1	Especificación de requisitos funcionales y no funcionales
          
        p Los requisitos funcionales detallan las acciones que el sistema debe realizar, mientras que los no funcionales se centran en la calidad y las restricciones del sistema. Ambos deben ser definidos con precisión para evitar malentendidos durante el desarrollo.
        p #[b Requisitos funcionales:] incluyen las operaciones del sistema, como el inicio de sesión de usuarios, la gestión de datos, o las interacciones del usuario con el sistema.  

        .row.justify-content-center.mb-5  
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Requisitos funcionales
            
            .bgfig.p-5.brad.mb-2
              img.img-a.img-t(src='@/assets/curso/temas/24.svg' alt='La Figura 1 se denomina «Requisitos funcionales» y presenta el concepto, las principales características y algunos ejemplos de los requisitos funcionales.') 
            figcaption Fuente: OIT, 2024.          

        p #[b Requisitos no funcionales:] se refieren a características como la escalabilidad, la seguridad, o la facilidad de uso. 

        .row.justify-content-center.mb-5  
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span  Requisitos no funcionales
            .bgfig.p-5.brad.mb-2
              img.img-a.img-t(src='@/assets/curso/temas/25.svg' alt='La Figura 2 se denomina «Requisitos no funcionales» y presenta el concepto, las principales características y algunos ejemplos de los requisitos no funcionales.') 
            figcaption Fuente: OIT, 2024.  


    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2	Uso de plantillas y estándares
    .row.justify-content-center.bg3.p-4.brad.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/26.png' alt='')
      .col.pt-lg-0.pt-md-4.j1
        p.mb-0 La estandarización de la documentación a través de plantillas y normas reconocidas facilita la coherencia y la revisión de los requisitos. Las plantillas proporcionan un marco que asegura que toda la información relevante esté incluida y organizada de manera lógica.   

    p Normas como IEEE 830 y IEEE 29148 definen estructuras para la documentación de requisitos, incluyendo secciones para el contexto del sistema, descripción detallada, restricciones, y requisitos específicos.      

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. 
          span Estándares IEEE 830 y IEEE 29148
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Norma 
                th Plantilla
                th Descripción
                th Componentes principales

            tbody
              tr
                td.text-bold(rowspan='5') IEEE 830
                td.text-bold(rowspan='5') Especificación de Requisitos de #[i software] (SRS)
                td(rowspan='5') Esta norma proporciona una estructura estándar y detallada para documentar los requisitos de #[i software], lo que asegura una comunicación clara y consistente entre los equipos de desarrollo, diseño y los stakeholders. Permite identificar de manera precisa las necesidades funcionales y no funcionales del sistema, minimizando ambigüedades y facilitando el seguimiento del desarrollo.
                td - #[b Propósito del sistema:] describe el objetivo general y el alcance del #[i software], así como los beneficios que proporciona.
              tr
                td - #[b Descripción general:] ofrece un resumen del sistema, definiendo las principales funcionalidades y restricciones.
              tr
                td - #[b Requisitos funcionales:] lista específica de funcionalidades que el #[i software] debe realizar, detallando cada operación y cómo debe comportarse.
              tr
                td - #[b Requisitos no funcionales:] define atributos como seguridad, rendimiento, disponibilidad y otros aspectos de calidad.
              tr
                td - #[b Interfaces externas:] explica las interacciones con otros sistemas, hardware, #[i software] y usuarios, especificando las interfaces de usuario y las conexiones necesarias.
              tr
                td.text-bold(rowspan='4') IEEE 29148
                td.text-bold(rowspan='4') Gestión de Requisitos de Ingeniería de Sistemas
                td(rowspan='4') Esta norma establece un marco integral para gestionar y especificar los requisitos de sistemas complejos. Proporciona guías para la identificación, documentación, análisis y control de los requisitos, abarcando tanto #[i software] como hardware. Facilita la trazabilidad de los requisitos desde la concepción hasta la implementación, lo cual es fundamental en proyectos de gran escala.
                td - #[b Propósito y alcance del sistema:] define claramente la finalidad del sistema y los límites de su aplicación, identificando el entorno operativo y las necesidades a satisfacer.
              tr
                td - #[b Desglose de requisitos:] se detallan los requisitos de manera estructurada, especificando tanto las funciones esenciales como las características de calidad.
              tr
                td - #[b Atributos de calidad de los requisitos:] evalúa y asegura que los requisitos sean completos, consistentes, viables, verificables y trazables.
              tr
                td - #[b Trazabilidad y priorización:] explica cómo se relacionan los requisitos con otros elementos del proyecto y establece su importancia relativa para orientar las decisiones de desarrollo.

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3	Priorización y trazabilidad

    p La priorización de requisitos es crítica para asegurar que el proyecto se enfoque primero en las funcionalidades de mayor valor para el cliente o el negocio. Técnicas como MoSCoW (Must, Should, Could, Won’t) ayudan a categorizar los requisitos según su importancia. 
    .row.justify-content-start.my-4
      .col-auto
        h5.py-2.px-3.bgt1.brad Métodos de priorización   

    .row.justify-content-center.mb-5 
      .col-lg-8.my-lg-0.my-3
        .bgt1.p-3.brad.mb-4       
          .bgw.brad.p-3.j1.mb-3
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b MoSCoW:] asigna prioridades claras a cada requisito.
          .bgw.brad.p-3.j1
            ul.mb-0.lista-ul.fa-ul
              li.mb-0 
                i.fas.fa-check-circle.color1
                span.mb-0 #[b Análisis de valor:] evalúa el beneficio que aporta cada funcionalidad en relación al esfuerzo necesario para implementarla.  

        .row.justify-content-center
          .col-lg-6
            .bg8.p-4.h-100.j1.brad
              p.mb-0 #[b Ejemplo:] “la funcionalidad de búsqueda avanzada” podría clasificarse como una prioridad media, mientras que “La autenticación de usuarios” sería una prioridad alta.   
          .col-lg-6
            .bg8.p-4.h-100.j1.brad
              p.mb-0 #[b Trazabilidad:] permite rastrear cada requisito desde su concepción hasta su implementación, asegurando que ningún aspecto se pierda en el proceso. Las herramientas de trazabilidad incluyen matrices que relacionan los requisitos con las partes del sistema que los implementan, así como con las pruebas que validan su correcto funcionamiento.                                           
      .col-lg-4.my-lg-0.my-3.j1
            img.img-a.img-t(src='@/assets/curso/temas/27.png' alt='')   


    .row.justify-content-center 
      .col-lg-10
        .row.justify-content-center.bg12.text-white.p-4.brad.mb-5
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/28.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 #[b Ejemplo:] un requisito funcional de “autenticación de usuarios” se puede rastrear hasta el módulo de seguridad del sistema y vincularse con pruebas de validación para garantizar su correcto desempeño.   

    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4	Herramientas de control de versiones

    p El control de versiones de los requisitos sirve para gestionar cambios, colaboraciones y mantener un historial claro de las modificaciones realizadas a lo largo del desarrollo del proyecto. Las herramientas de control de versiones proporcionan funcionalidades para revertir cambios, gestionar ramas de desarrollo, y colaborar de manera eficiente. 

    .row.justify-content-center    
      .col-lg-9.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Ejemplos de herramientas populares")
            p Documentos que contienen las preguntas que se realizarán durante una entrevista. Estas preguntas deben estar organizadas lógicamente y cubrir todos los aspectos importantes del sistema.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Git:] ofrece control de versiones distribuido, ideal para proyectos colaborativos.
              li 
                i.fas.fa-check-circle.color1
                span #[b Subversion (SVN):] herramienta de control de versiones centralizado, útil para proyectos que prefieren una estructura de control más tradicional.                           
          div(titulo="Escenarios de uso")
            p Diseñados para obtener respuestas específicas que puedan ser analizadas cuantitativamente.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Gestión de cambios:] si el cliente solicita una modificación en un requisito, como ajustar la interfaz para cumplir con nuevos estándares de accesibilidad, el control de versiones permite documentar y gestionar este cambio sin perder el rastro de las versiones anteriores.

              li 
                i.fas.fa-check-circle.color1
                span #[b Colaboración:] en un equipo de desarrollo, varios miembros pueden trabajar simultáneamente en diferentes partes del documento de requisitos, con la garantía de que las versiones se gestionan y sincronizan correctamente. 
        .row.justify-content-center.bg12.text-white.p-4.brad.mb-5
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/28.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 Ejemplo: un cambio en la especificación de un requisito se documenta como un “commit” en la herramienta de control de versiones, permitiendo al equipo revisar, aprobar y realizar un seguimiento de las modificaciones.
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/29.png' alt='')                               
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
