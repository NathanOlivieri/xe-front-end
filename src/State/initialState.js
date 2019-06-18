export const initialState = {
    app: {
        language: 'eng',     //or 'spa' or 'fre'
    },
    theme: {
        primary: true,
        colors: {
            app_bg: '#E5E5E5',
            nav_bg: '#F9F9F9',
            el_5: '#FFF',
            dark_blue: '#5E637E',
            black: '#32323c'
        }
    },
    nav: {
        visible: false,
    },
    menu: {
        isOpen: false
    },
    text: {
        menu: {
            english: 'Translate Page',
            french: 'Traduire la Page',
            spanish: 'Traduires los polos',
        },
        logo:{
            english: 'Translation',
            french: 'Traduction',
            spanish: 'Traduciones si'
        },
        english: {
            services:{
                translation: {
                    name: 'Translation',
                    desc: 'lorem lorem lorem lorem lorem'
                }
            }
        },
        french: {
            services:{
                traduction: {
                    name: 'Traduction',
                    desc: 'french lorem french lorem french lorem'
                }
            }
        }
    }
}