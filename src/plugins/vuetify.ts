// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { ru } from 'vuetify/locale'
// Vuetify
import { createVuetify } from 'vuetify'

// Components
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#1697f6',
        }
      }
    }
  },
  locale: {
    locale: 'ru',
    messages: {
      ru: {
        ...ru,
        dataFooter: {
          itemsPerPageText: 'Элементов на странице:',
          pageText: '{0}-{1} из {2}',
          nextPage: 'Следующая страница',
          prevPage: 'Предыдущая страница',
          firstPage: 'Первая страница',
          lastPage: 'Последняя страница',
          itemsPerPageAll: 'Все', // <--- вот это то, что тебе нужно!
        },
      },
    },
  },
})

