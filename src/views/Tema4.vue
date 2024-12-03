<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Validación de requisitos

    .row.justify-content-center.bg3.p-4.brad.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/38.png' alt='')
      .col.pt-lg-0.pt-md-4.j1
        p.mb-0 La validación de requisitos es un proceso crítico para garantizar que los requisitos recopilados y documentados sean precisos, comprensibles y viables para los desarrolladores y el cliente. Esta fase implica verificar que los requisitos reflejen fielmente las expectativas del cliente y asegurar que el producto final cumpla con las necesidades especificadas. 

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1	Conceptos de usabilidad y experiencia de usuario (UX)
      
    p Las técnicas de validación permiten confirmar que los requisitos cumplen con las expectativas del cliente antes de proceder al desarrollo.
    TabsC.color-acento-contenido
      .py-3.py-md-4.bg11(titulo="Revisiones y <i>walkthrough</i>")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/35.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Revisiones y #[i walkthrough]
            p Consisten en reuniones donde se revisan los requisitos de manera detallada con el cliente y otros #[i stakeholders].
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] presentar un documento de requisitos funcionales a un grupo de #[i stakeholders] y discutir cada elemento para asegurar su comprensión y aprobación.

      .py-3.py-md-4.bg11(titulo="Prototipos de alta fidelidad")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/36.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Prototipos de alta fidelidad
            p Mostrar prototipos detallados a los usuarios finales para obtener su retroalimentación antes de pasar a la fase de desarrollo.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] un prototipo de una aplicación de reserva de vuelos donde los usuarios pueden probar la interfaz y proporcionar comentarios sobre su facilidad de uso.

      .py-3.py-md-4.bg11(titulo="Simulaciones y escenarios de uso")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/37.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Simulaciones y escenarios de uso
            p Usar simulaciones para mostrar cómo el sistema respondería a escenarios reales.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] simular el flujo de una transacción bancaria en línea y pedir a los usuarios que evalúen su experiencia y satisfacción.   

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2	Revisión y ajustes de especificaciones

    p Después de la validación inicial, es común realizar revisiones para ajustar y mejorar los requisitos con base en la retroalimentación obtenida.


    .row.justify-content-center    
      .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Evaluación de consistencia")
            p Revisar los requisitos para asegurarse de que no haya contradicciones o inconsistencias.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] verificar que un requisito de seguridad no contradiga un requisito de facilidad de acceso.                           
          div(titulo="Evaluación de viabilidad")
            p Confirmar que los requisitos son factibles de implementar dentro de las limitaciones de tiempo, presupuesto y tecnología.
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] asegurarse de que una función avanzada, como la inteligencia artificial para recomendaciones de productos, sea viable con el presupuesto y los recursos actuales.
          div(titulo="Documentación de cambios")
            p Registrar los ajustes realizados a los requisitos y las razones detrás de estos cambios.         
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Ejemplo:] si un cliente decide cambiar un requisito de diseño tras una sesión de validación, se documenta el cambio y se justifica en el informe de requisitos.
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/39.png' alt='')                      

    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3	Simulación de validaciones con casos de estudio

    p.mb-5 El uso de casos de estudio permite simular cómo funcionaría el sistema en situaciones de la vida real, lo que ayuda a identificar problemas antes del desarrollo.

    .row.justify-content-center.text-center    
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/40.png' alt='')     
          h5 Desarrollo de escenarios de prueba
          p Crear escenarios realistas que representen cómo los usuarios interactuarán con el sistema.

          p.mb-0 #[b Ejemplo:] un caso de estudio para un sistema de gestión de inventario podría incluir la simulación de pedidos de productos, devoluciones y actualizaciones en tiempo real.
   
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/41.png' alt='')     
          h5 Análisis de resultados
          p Evaluar cómo el sistema responde a las simulaciones y detectar posibles fallos o áreas de mejora.
          p.mb-0 #[b Ejemplo:] si el sistema no actualiza los datos de inventario en tiempo real durante la simulación, esto indicaría un área que requiere optimización.
 
      .col-lg-4.my-lg-0.my-3
        .bg8.p-4.h-100.j1.brad
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/42.png' alt='')     
          h5 Retroalimentación basada en simulaciones

          p Presentar los resultados de las simulaciones a los #[i stakeholders] y usar su retroalimentación para hacer ajustes.

          p.mb-0 #[b Ejemplo:] los usuarios podrían señalar que el sistema necesita una interfaz más intuitiva después de observar cómo se comporta durante una simulación de uso. 

    Separador 
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4	Aplicación de protocolos aprobados

    p La aplicación de protocolos estándar para la validación de requisitos ayuda a garantizar la uniformidad y calidad en el proceso.

    .row.bg6.align-items-center
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Establecimiento de protocolos de validación
                p Crear un conjunto de reglas y procedimientos que deben seguirse para validar los requisitos.
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Ejemplo:] un protocolo podría especificar que todos los requisitos deben ser revisados por al menos dos #[i stakeholders] antes de ser aprobados.        
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='') 

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Uso de herramientas de gestión de requisitos
                p Implementar #[i software] que facilite la validación y seguimiento de requisitos, como #[i Jira, Confluence o IBM DOORS].
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Ejemplo:] utilizar #[i Jira] para rastrear el estado de cada requisito y asegurarse de que se cumplan los protocolos de validación.        
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='') 

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Cumplimiento con estándares organizacionales
                p Asegurar que el proceso de validación cumpla con los estándares de calidad establecidos por la organización.
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-check-circle.color1
                    span #[b Ejemplo:] seguir las guías de validación definidas por el estándar IEEE 29148 para la especificación de requisitos de #[i software].         
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='') 
</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
import TabsC from '../bootstrap/TabsC'
export default {
  name: 'Tema4',
  components: { TabsC, AcordionA, SlyderA },
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
