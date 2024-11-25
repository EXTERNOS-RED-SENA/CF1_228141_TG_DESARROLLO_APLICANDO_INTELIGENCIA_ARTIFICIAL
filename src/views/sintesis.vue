<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El siguiente diagrama ofrece una visión sintetizada de los principales conceptos y procedimientos desarrollados en el componente “Recolección y documentación de requisitos de #[i software]”. Está diseñado para facilitar al aprendiz la comprensión de las interrelaciones entre los diversos procesos que conforman la gestión de requisitos en un proyecto de #[i software].

    .row.justify-content-center.mb-4
      .col-lg-3.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/1.png' alt='')    
      .col-lg-5.my-lg-0.my-3 
        .bg1.p-4.h-100.j1
          p.mb-0 En el centro del diagrama se encuentra el concepto principal: “Recolección y documentación de requisitos de #[i software]”, del cual se desprenden cuatro procesos: recolección de datos, documentación de requisitos, análisis y modelado, y validación de requisitos. Cada uno de estos procesos se desglosa en temáticas específicas que detallan el enfoque y contenido del componente, desde técnicas de recolección hasta la validación final con el cliente.
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/2.png' alt='')  


    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3 
        img.img-a.img-t(src='@/assets/curso/temas/3.png' alt='')  

      .col-lg-7.my-lg-0.my-3
        .bgr1.p-3.brad.j1.h-100   
          p.mb-0 El proceso de recolección de datos abarca la aplicación de técnicas y la elaboración de instrumentos, destacando la importancia de las fuentes de información precisas. La documentación de requisitos incluye la especificación detallada, el uso de plantillas y la gestión de versiones para mantener la integridad de los datos. En análisis y modelado, se desarrollan diagramas y prototipos que facilitan la representación visual de los requisitos. Finalmente, la validación de requisitos se centra en técnicas para asegurar que las especificaciones sean acordes a las necesidades del cliente, incluyendo revisiones y simulaciones.   

    p.mb-5 Este diagrama actúa como una herramienta visual que ayuda a los aprendices a comprender la secuencia y conexión de los procesos descritos. Se les invita a utilizarlo como complemento del contenido detallado, sirviendo tanto como una referencia rápida como un recordatorio estructurado de los elementos en la gestión de requisitos de #[i software].      

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img.img-a.img-t(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
