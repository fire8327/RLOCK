import { generateClasses } from '@formkit/themes'
import { ru } from '@formkit/i18n'
import genesis from '@formkit/themes/tailwindcss/genesis'
import { genesisIcons } from '@formkit/icons'

export default {
    icons: {
        ...genesisIcons,
    },
    locales: { ru },
    locale: 'ru',
    config: {
        classes: generateClasses(genesis),
    }
}