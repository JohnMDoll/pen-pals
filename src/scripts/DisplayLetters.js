//module to produce HTML for submitted letters to be displayed
import * as db from "./dataAccess.js"



export const WrittenLetters = () =>{
    let letters = db.getLetters()
    let pals = db.getPals()
    let topics = db.getTopics()
/*display each written letter including: 
pal.name & pal.email for authors and recipients (4 things)
letter.timestamp, and chosen letter topic(s)
*/

    const findAuthor = (letter) =>{
        return pals.find(pal =>pal.id === parseInt(letter.authorId))
    }
    const findRecipient = (letter) =>{
        return pals.find(pal =>pal.id === parseInt(letter.recipientId))
    }
    const findTopic = (letter) =>{
        return topics.find(topic =>topic.id === parseInt(letter.topicId))
    }


    return  `<h2 class="letter--header">Sent Letters:</h2>
    ${letters.map(letter=>{
        return `
        <section class="letters">
            <div class="letter--opening">Salutations ${findRecipient(letter).name} (${findRecipient(letter).email})</div>
            <div class="letter--body">${letter.letterText}</div>
            <div class="letter--closing">Laterz, ${findAuthor(letter).name} (${findAuthor(letter).email})</div>
            <div class="letter--timestamp">Dispatched ${letter.timestamp}</div>
            <div class="letter--topic">${findTopic(letter).topic}</div>
        </section>`
    }).join("")}`
    

}

