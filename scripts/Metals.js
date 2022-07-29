import { getMetals } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
    }
)

export const Metals = () => {
    let html = "<ul>"

// This is how you have been converting objects to <li> elements
    // for (const metal of metals) {
    //     html += `<li>
    //         <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
    //     </li>`
    // }

// For loop above rewritten with the .map() method
    const metalListItems = metals.map(
        (metal) => {
            return `<li>
                <input type="radio" name="metal" value="${metal.id}"/> ${metal.metal}
                </li>
            `
        }
    )
    html += metalListItems.join("")
    html += "</ul>"
    return html
}
    
