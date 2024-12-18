<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis y modelado

    .row.justify-content-center.bg9.p-0.mb-4 
      .col-lg-4.my-lg-0.my-3.p-0
        img.img-mov(src='@/assets/curso/temas/31.png' alt='')       
      .col-lg-8.my-lg-0.my-3.p-3.j1 
        p.mb-0 El análisis y modelado de requisitos es una fase del desarrollo de #[i software]. Permite transformar las necesidades del cliente en especificaciones detalladas que guíen el diseño y la implementación del sistema. Este tema se centra en técnicas y herramientas que aseguran que los requisitos se comprendan y se representen adecuadamente para todos los involucrados en el proyecto.

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1	Análisis de necesidades del cliente

    p El análisis de necesidades implica identificar y entender las expectativas del cliente, así como cualquier limitación o requisito específico que pueda impactar el diseño del sistema.


    .row.justify-content-center    
      .col-lg-8.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Métodos de análisis")
            p Reuniones con #[i stakeholders], entrevistas en profundidad, y observación de procesos.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] en un proyecto de desarrollo de una aplicación de gestión de inventario, se realizarían entrevistas con el equipo de almacén para comprender sus flujos de trabajo y necesidades específicas.                           
          div(titulo="Identificación de objetivos")
            p A partir de las necesidades recopiladas, se deben definir objetivos claros y alcanzables.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] si un cliente necesita reducir los tiempos de búsqueda de productos en el inventario, el objetivo sería desarrollar una función de búsqueda optimizada.
          div(titulo="Documentación de hallazgos")
            p Los hallazgos del análisis deben documentarse de manera estructurada para facilitar su validación y seguimiento.              

      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/32.png' alt='') 

    .row.bg10.align-items-center
      .px-lg-5.px-4  
          Separador 
          #t_3_2.titulo-segundo.color-acento-contenido
            h2 3.2	Creación de diagramas y prototipos

          p Los diagramas y prototipos son herramientas visuales que ayudan a representar la estructura y funcionalidad del sistema, facilitando la comunicación entre los desarrolladores, diseñadores y #[i stakeholders].

          .row.justify-content-center
            .col-lg-12
              .titulo-sexto.color-acento-contenido
                h5 Tabla 2. 
                span Diagramas y prototipos
              .tabla-a.color-acento-botones.mb-5
                table
                  caption Fuente: OIT, 2024.
                  thead
                    tr
                      th Categoría 
                      th Subcategoría
                      th Descripción
                      th Ejemplo

                  tbody
                    tr
                      td.text-bold(rowspan='2') Tipos de Diagramas
                      td.text-bold Diagramas de flujo
                      td Representan el flujo lógico de las operaciones.
                      td Un diagrama de flujo que muestra cómo un usuario navega por las opciones de un menú en una aplicación.
                    tr
                      td.text-bold Diagramas de casos de uso
                      td Describen cómo los usuarios interactúan con el sistema.
                      td Un caso de uso que detalla cómo un administrador agrega nuevos usuarios a la base de datos.
                    tr
                      td.text-bold(rowspan='2') Prototipado
                      td.text-bold Baja o alta fidelidad
                      td Crear prototipos permite obtener retroalimentación temprana de los usuarios.
                      td Un prototipo de una aplicación de comercio electrónico que muestra el flujo de compra completo.
                    tr
                      td.text-bold Herramientas de prototipado
                      td Herramientas utilizadas para crear prototipos, desde #[i wireframes] hasta interfaces interactivas.
                      td.fast-italic Figma, Adobe XD, Sketch. 


          Separador 
          #t_3_3.titulo-segundo.color-acento-contenido
            h2 3.3	Técnicas de modelado de requisitos  

          p El modelado de requisitos transforma las descripciones textuales en representaciones más estructuradas, como diagramas y especificaciones formales.

    .row.bg6.align-items-center
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          CarouselRED(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Lenguajes de modelado 
                p UML (Unified Modeling Language) es uno de los más utilizados, proporcionando una serie de diagramas que describen diferentes aspectos del sistema.
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Diagrama de clases:] Muestra la estructura de las clases, sus atributos y métodos.
                  li.ps-4 
                    i.fas.fa-check.color1
                    span #[b Ejemplo:] un diagrama de clases para una aplicación bancaria podría incluir clases como “Cuenta”, “Cliente” y “Transacción”.
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Diagrama de secuencia:] Representa la interacción entre objetos a lo largo del tiempo.
                  li.ps-4 
                    i.fas.fa-check.color1
                    span #[b Ejemplo:] un diagrama de secuencia que muestra cómo un usuario inicia sesión y accede a sus datos personales.                                   
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/33.png', alt='')  

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Técnicas de modelado ágil 
                p Incluyen el uso de historias de usuario y diagramas de actividades para proyectos que adoptan metodologías ágiles.
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Historia de usuario:] “Como usuario, quiero recibir notificaciones de actualizaciones de mi pedido, para estar informado sobre el estado de mi compra.”                
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')   

    Separador 
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4	Integración de puntos de vista en el diseño

    p Es fundamental integrar los diferentes puntos de vista de los #[i stakeholders] en el diseño del sistema para garantizar que se cumplan todas las expectativas y se aborden las posibles limitaciones.
    TabsC.color-acento-contenido
      .py-3.py-md-4.bg11(titulo="Identificación de puntos de vista")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/35.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Identificación de puntos de vista  
            p Diferentes #[i stakeholders], como usuarios finales, desarrolladores, y gerentes de proyecto, pueden tener perspectivas únicas sobre el sistema.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] un usuario final podría priorizar la facilidad de uso, mientras que el gerente de TI podría centrarse en la seguridad de la información.

      .py-3.py-md-4.bg11(titulo="Documentación de puntos de vista")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/36.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Documentación de puntos de vista  
            p Los puntos de vista se documentan utilizando herramientas como Viewpoints, que organizan las distintas perspectivas en un formato comprensible.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo práctico:] en un proyecto de desarrollo de #[i software] para una clínica, los puntos de vista incluirían las necesidades de los médicos, el personal administrativo y los pacientes.

      .py-3.py-md-4.bg11(titulo="Resolución de conflictos")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/37.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Resolución de conflictos 
            p Integrar y priorizar puntos de vista a menudo requiere negociación y compromiso, asegurando que se encuentren soluciones equilibradas.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] si un usuario desea una interfaz muy visual y atractiva, pero el equipo de desarrollo sugiere simplicidad para mejorar el rendimiento, se podría optar por un diseño que equilibre ambos aspectos.                                                                                                             
</template>

<script>
export default {
  name: 'Tema3',
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
