<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
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
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
