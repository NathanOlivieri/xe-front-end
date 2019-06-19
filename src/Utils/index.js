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