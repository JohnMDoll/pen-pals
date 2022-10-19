import * as dataAccess from "./dataAccess.js"
import {WriteLetter} from "./LetterForm.js"
import {WrittenLetters} from "./DisplayLetters.js"
let pals = dataAccess.getPals()
let letters = dataAccess.getLetters()
let topics = dataAccess.getTopics()
let letterTopics = dataAccess.getLetterTopics()

export const PenPals= () =>{
        return `
        <h1 class="page--title">The Illustrious Pen Pals Society</h1>
        <section class="letter--form"><h2 class ="write--letter">Write a letter!</h2>
            ${WriteLetter()}
        </section>
        <section class="letters--written">
        ${WrittenLetters()}
        </section>
    `}

            

