<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Caracterización de la información
      
    .row.justify-content-center.bg3.p-0.mb-4  
      .col-lg-8.my-lg-0.my-3.p-3.j1 
        p.mb-0 La recolección de datos en el ámbito de desarrollo de #[i software] es un proceso metódico que se utiliza para captar información valiosa que servirá de base para documentar los requisitos de un sistema. Este paso inicial sirve para asegurar que las soluciones desarrolladas cumplan con las expectativas y necesidades de los usuarios y otros actores involucrados en el proyecto. A través de diversas técnicas de recolección, se busca obtener una visión integral y precisa del problema que se desea resolver y las funcionalidades que el #[i software] debe incluir.
      .col-lg-4.my-lg-0.my-3.p-0
        img.img-mov(src='@/assets/curso/temas/8.png' alt='')  

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1	Técnicas de recolección        
      
    p La selección de técnicas de recolección depende del tipo de información que se necesita y de la disponibilidad de los usuarios y otros actores relevantes. A continuación, se detallan algunas de las técnicas más comunes y ejemplos de cómo aplicarlas:  

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="Entrevistas")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/9.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Entrevistas 
            p Una técnica que permite obtener información cualitativa detallada directamente de los usuarios, clientes o expertos. Las entrevistas pueden ser estructuradas, semiestructuradas o abiertas.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] si se está desarrollando un sistema de gestión para una clínica, se puede entrevistar al personal médico para entender cómo registran la información de los pacientes y qué características les gustaría que el nuevo sistema tenga.
              li 
                i.fas.fa-check-circle.color1
                span #[b Consejo:] preparar preguntas claras y abiertas, como “¿Cuáles son los desafíos más frecuentes que enfrenta con el sistema actual?” o “¿Qué características le gustaría que se mantuvieran o mejoraran?”       

      .py-3.py-md-4.bg11(titulo="Encuestas y cuestionarios")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/10.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Encuestas y cuestionarios
            p Herramientas útiles para recopilar datos de un gran número de personas de forma rápida. Las preguntas pueden ser cerradas (respuestas específicas) o abiertas (respuestas libres).
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] En un proyecto para un sistema de reservas de vuelos, se podría enviar un cuestionario a clientes frecuentes preguntando cómo califican su experiencia actual y qué aspectos creen que deberían mejorarse.
              li 
                i.fas.fa-check-circle.color1
                span #[b Consejo:] Diseñar las preguntas para que sean fáciles de entender y no generen ambigüedades, como “¿Con qué frecuencia tiene problemas al realizar una reserva en línea?” con opciones como “Siempre”, “A menudo”, “Rara vez”, “Nunca”.

      .py-3.py-md-4.bg11(titulo="Observación")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/11.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Observación
            p Consiste en observar cómo los usuarios interactúan con un sistema existente o cómo ejecutan sus tareas sin un sistema automatizado. La observación puede ser pasiva (sin intervenir) o participante (interactuando con los usuarios).
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] en el desarrollo de un #[i software] para una fábrica, se puede observar cómo los operarios usan una máquina y qué procesos realizan manualmente que podrían automatizarse con el nuevo sistema.
              li 
                i.fas.fa-check-circle.color1
                span #[b Consejo:] tomar notas detalladas y, si es posible, grabar las sesiones para analizarlas posteriormente.

      .py-3.py-md-4.bg11(titulo="<i>Focus group</i>")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/12.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5.fst-italic Focus group
            p Una reunión con un grupo de usuarios o expertos para discutir y obtener múltiples perspectivas sobre el sistema a desarrollar. Se puede usar para obtener insights sobre preferencias y prioridades.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] si se está desarrollando una aplicación móvil para educación, se podría organizar un focus group con profesores y aprendices para entender mejor sus expectativas y desafíos.
              li 
                i.fas.fa-check-circle.color1
                span #[b Consejo:] moderar la sesión para que todos los participantes tengan la oportunidad de compartir sus opiniones, y registrar las discusiones de manera estructurada.

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2	Identificación de fuentes de información
      
    p La identificación de fuentes de información es un paso crítico para garantizar que los datos recopilados sean precisos y relevantes para el proyecto. Estas fuentes pueden ser:

    .row.bg6.align-items-center
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          CarouselRED(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Primarias
                p Datos obtenidos directamente de los usuarios o actores clave.
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Ejemplo:] si se está creando un sistema de inventario para un supermercado, las fuentes primarias podrían ser los empleados de la bodega, los gerentes de las tiendas y los proveedores.                
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/14.png', alt='')
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Secundarias
                p Datos recopilados de documentos existentes, como informes de sistemas antiguos, manuales de usuario y estudios previos.
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Ejemplo:] para un proyecto de rediseño de un portal web, se podría revisar la documentación previa que explique las decisiones de diseño y los informes de usabilidad.                
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/15.png', alt='')  
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Actores involucrados
                p Las personas que interactúan con el sistema o tienen un interés en su funcionamiento. Estos pueden incluir:
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Usuarios finales:] quienes usarán el #[i software] directamente (por ejemplo, cajeros en un sistema de punto de venta).

                  li 
                    i.fas.fa-check-circle.color1
                    span #[b #[i Stakeholders:]] personas que tienen un interés en el éxito del sistema, como gerentes de proyecto, patrocinadores y equipos de soporte técnico.                
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='')                                    

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3	Elaboración de instrumentos de recolección
      
    p El diseño adecuado de instrumentos de recolección de datos se utiliza para captar información útil y bien organizada. Algunos ejemplos de estos instrumentos incluyen:

    .row.justify-content-center    
      .col-lg-9.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Guías de entrevistas")
            p Documentos que contienen las preguntas que se realizarán durante una entrevista. Estas preguntas deben estar organizadas lógicamente y cubrir todos los aspectos importantes del sistema.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] para entrevistar a un gerente de ventas, una guía podría incluir preguntas como “¿Qué procesos considera más críticos en la gestión de clientes?” y “¿Cuáles son los datos más importantes que debe capturar el sistema?”            
          div(titulo="Formularios de encuestas")
            p Diseñados para obtener respuestas específicas que puedan ser analizadas cuantitativamente.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] un formulario de encuesta para clientes podría incluir preguntas sobre la frecuencia de uso del sistema y la satisfacción general con el servicio.
          div(titulo="Listas de verificación")
            p Utilizadas para asegurarse de que se recopilen todos los datos necesarios.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] una lista de verificación para observar el uso de un sistema podría incluir ítems como “¿El usuario tiene dificultades para navegar por el menú principal?” y “¿Cuánto tiempo tarda en completar una tarea básica?”

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/17.png' alt='')     

    Separador 
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4	Aplicación de métodos de recolección
      
    p.mb-5 La aplicación de las técnicas de recolección debe ser metódica y organizada para garantizar la validez de los datos obtenidos. Este proceso incluye:                      

    .row.justify-content-center.text-center    
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/18.png' alt='')     
          h5 Planificación previa 
          p Antes de iniciar la recolección, se deben definir los objetivos, elegir los métodos adecuados y asignar roles dentro del equipo. 
          p.mb-0 #[b Ejemplo:] si se van a realizar observaciones en una fábrica, se debe coordinar con el personal y definir horarios que no interfieran con su productividad.       
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/19.png' alt='')     
          h5 Ejecución
          p Implementar las técnicas elegidas de manera cuidadosa, asegurando que los datos se capturen de manera estructurada.
          p.mb-0 #[b Ejemplo:] Durante una entrevista, se deben tomar notas detalladas o grabar la conversación (con el permiso del entrevistado) para no perder información importante.      
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/20.png' alt='')     
          h5 Documentación
          p Registrar los datos de manera organizada y clara para que puedan ser fácilmente analizados y utilizados en la siguiente fase del desarrollo. 
          p.mb-0 #[b Ejemplo:] crear un resumen de las observaciones realizadas en una sesión de focus group, destacando los puntos importantes y las ideas más relevantes.       

</template>

<script>
export default {
  name: 'Tema1',
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
