<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Ambler, S. W. (2002). The Agile Model Driven Development (AMDD) Process. Recuperado de ',
        link:
          'https://typeset.io/pdf/agile-model-driven-development-amdd-ovo1df3coj.pdf',
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
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
