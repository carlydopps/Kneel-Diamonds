import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()



/* ERD Thought Process

    Tables:
        - Customer
        - Custom Piece
        - Metal
        - Carat
        - Style
        - Cart
        - Order
        - Locations
        - Employees

    A customer can create many custom items
    A custom item can be associated with only one customer

    A custom order can have only one metal
    A metal can be associated with many custom orders

    A custom order can have only one size
    A size can be associated with many custom orders

    A custom order can have only one style
    A style can be associated with many custom orders

    A customer can place one or many orders
    An order can be associated with only one customer

    An order can have many products
    A product can be associated with only one order **Check this one

*/