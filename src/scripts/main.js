console.log("Welcome to the main module")

import * as data from "./dataAccess.js";
import { PenPals } from "./PenPals.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    data.fetchPals()
        .then(() => data.fetchTopics())
            .then(() => data.fetchLetters())
                .then(() => data.fetchLetterTopics())
                    .then(
                    () => {
                        mainContainer.innerHTML = PenPals()
                    }
                )
}
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
render()