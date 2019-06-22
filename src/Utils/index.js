// import React from 'react'
import { useStateValue } from '../State/state'

export const Translator = ( object ) => {

    const [{ app }] = useStateValue()

    switch (app.language) {
        case 'en':
            return object.english;
        case 'fr':
            return object.french;
        case 'sp':
            return object.spanish
        default:
            break;
    }
}

export const themeSwitch = (theme, hexCode1, hexCode2) => {
    //function looks at props.theme and decides which value to give. (two values passed to function as hex codes.)
    

}