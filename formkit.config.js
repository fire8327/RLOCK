import { generateClasses } from '@formkit/themes'
import { ru } from '@formkit/i18n'
import genesis from '@formkit/themes/tailwindcss/genesis'

export default {
    locales: { ru },
    locale: 'ru',
    config: {
        classes: generateClasses(genesis),
    }
}