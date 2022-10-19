import * as dataAccess from "./dataAccess.js"

let letters = dataAccess.getLetters()
let letterTopics = dataAccess.getLetterTopics()

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send--letter") {
        // Get what the user filled into form fields
        const authorId = parseInt(document.querySelector("#author").value)
        console.log(authorId)        
        const recipientId = document.querySelector("#recipient").value
        console.log(recipientId) 
        const topicId = document.querySelector("input[name='topic']:checked").value
        console.log(topicId)
        const letterText = document.querySelector("input[name='letter']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: authorId,
            recipientId: parseInt(recipientId),
            topicId: parseInt(topicId),
            letterText: letterText,
        }

        // Send the data to the API for permanent storage
        dataAccess.sendLetter(dataToSendToAPI)
    }
})

export const WriteLetter = () => {
    let topics = dataAccess.getTopics()
    let pals = dataAccess.getPals()
    const letterForm = () =>{
        //what does <select class="author" id="author"/> do?
        let html = `
            <div class="field">
                <label class="label" for="author">Author</label>
                <select class="author" id="author"/>
                <option value="author">Who are you?</option>
                ${pals.map(pal => {
                    return `<option name="author" value=${pal.id}>${pal.name}</option>`
                }).join("")}
                </select>
            </div>
                <div class="field">
                <label class="label" for="letter">Letter</label>
                <input type="text" name="letter" class="input" />
            </div>
            <div class="field">
                <label class="label" for="topic--selection">Topic Selection</label>
                ${topics.map(topic => {
                    return `<input type="radio" name="topic" value="${topic.id}"/>${topic.topic}</option>`
                }).join("")}
            </div>
            <div class="field">
                <label class="label" for="recipient">Recipient</label>
                <select class="recipient" id="recipient"/>
                <option value="topic">Choose Recipient...</option>
                    ${pals.map(pal => {
                        return `<option name="recipient" value="${pal.id}">${pal.name}</option>`
                    }).join("")}
                    </select>
            </div>
            </select><button class="send--letter" id="send--letter">Send</button></li>`
        
        return html
    }
    const html = letterForm()
    return html
}
