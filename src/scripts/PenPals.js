import * as dataAccess from "./dataAccess.js"
import {WriteLetter} from "./LetterForm.js"
let pals = dataAccess.getPals()
let letters = dataAccess.getLetters()
let topics = dataAccess.getTopics()
let letterTopics = dataAccess.getLetterTopics()

export const PenPals= () =>{
        return `
        <h1 class="page--title">The Illustrious Pen Pals Society</h1>
        <section class="letter--form">
            ${WriteLetter()}
        </section>
        <h2 class="written--letters>
        </h2>`
    }

            //  ${WrittenLetters()}

