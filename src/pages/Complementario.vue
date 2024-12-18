<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
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
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
