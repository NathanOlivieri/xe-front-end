//note for accents use Cryptic Codes (google)

export const initialState = {
    app: {
        language: 'en',     //or 'spa' or 'fre'
        curNavItem: 'services'
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
        scrollPos: null
    },
    menu: {
        isOpen: false
    },
    text: {
        menu: {
            english: 'Translate Page',
            french: 'Traduire la Page',
            spanish: 'Traduires la Paje',
        },
        logo:{
            english: 'Translation',
            french: 'Traduction',
            spanish: 'Traduciones si'
        },
        hero: {
            english: 'ÍEnglish ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            french: 'French ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            spanish: 'Spanish ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        nav: {
            services: { 
                english: 'Services',
                french: 'Prestations de service',
                spanish: 'Servicios'
            },
            about: { 
                english: 'About',
                french:  'À Propos',
                spanish: 'Sobre mi',
            },
            contact: { 
                english: 'Contact Me',
                french: 'Contactez moi',
                spanish: 'contáctame'
            }
        }
    }
}