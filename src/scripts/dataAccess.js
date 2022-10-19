
//create holders for key variables
const applicationState = {
    pals: [],
    letters: [],
    topics: [],
    lettertopics: []
}
//locally set the html filler key (for CustomEvent use) and the API address
const mainContainer = document.querySelector("#container")
const API = "http://localhost:8088"
//go ahead and create something to fetch all the json d/b resources just bc
export const fetchPals = () => {
    return fetch(`${API}/pals`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.pals = data
            }
        )
}
export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.topics = data
            }
        )
}
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.letters = data
            }
        )
}
export const fetchLetterTopics = () => {
    return fetch(`${API}/lettertopics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.lettertopics = data
            }
        )
}
//template for deleting json resources just in case it's wanted later
// export const deleteRequest = (id) => {
//     return fetch(`${API}/partyRequests/${id}`, { method: "DELETE" })
//         .then(
//             () => {
//                 mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//             }
//         )
// }

//json fetch copier function
export const getTopics = () => {
    let topicsCopy = structuredClone(applicationState.topics)
    return topicsCopy
}
export const getPals = () => {
    let palsCopy = structuredClone(applicationState.pals)
    return palsCopy
}
export const getLetters = () => {
    let lettersCopy = structuredClone(applicationState.letters)
    return lettersCopy
}
export const getLetterTopics = () => {
    let letterTopicsCopy = structuredClone(applicationState.lettertopics)
    return letterTopicsCopy
}
// send to database>fetch>notify to update fxn template
export const sendLetter = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const sendLetterTopics = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    return fetch(`${API}/lettertopics`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}