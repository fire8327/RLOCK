import FormKitVariants from '@formkit/themes/tailwindcss'

export default {
    darkMode:'class',
    theme: {
        fontFamily: {
            'Raleway': 'Raleway'
        }
    },
    content:[
        './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'
    ], 
    plugins: [
        FormKitVariants
    ],
}
