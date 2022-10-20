//module to produce HTML for submitted letters to be displayed
import * as db from "./dataAccess.js"



export const WrittenLetters = () =>{
    let letters = db.getLetters()
    let pals = db.getPals()
    let topics = db.getTopics()
    let lettertopics = db.getLetterTopics()
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
    const findTopic = (topicId) =>{
        return topics.find(topic =>topic.id === topicId)
    }
    const findTopicIDs = (letter) =>{
            for (const timestamp of lettertopics){
                if (timestamp.timestamp === letter.timestamp){
            return timestamp.topics
        }
    }
}
    return  `<h2 class="letter--header">Sent Letters:</h2>
    ${letters.map(letter=>{
        return `
        <section class="letters">
            <div class="letter--opening">Salutations ${findRecipient(letter).name} (${findRecipient(letter).email})</div>
            <div class="letter--body">${letter.letterText}</div>
            <div class="letter--closing">Laterz, ${findAuthor(letter).name} (${findAuthor(letter).email})</div>
            <div class="letter--timestamp">Dispatched ${letter.timestamp}</div>
            <ul>${findTopicIDs(letter).map(lettertopic=>{
                return `<div class="letter--topic" id="${lettertopic}">${findTopic(lettertopic).topic}</div>`
        }).join("")}</ul>

        </section>`
    }).join("")}`

}

