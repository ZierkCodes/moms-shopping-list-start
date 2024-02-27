// TODO: Grab the list
const shoppingList = document.getElementById("list");
// TODO: Grab the input field
const titleInput = document.getElementById("title")
// TODO: Grab the buttons.
const submitButton = document.getElementById("submit-item")
// const editButtons = document.querySelectorAll(".edit-button")
// const delButtons = document.querySelectorAll(".delete-button")

// TODO: Add click event to the button.
submitButton.addEventListener('click', () => {

});
// TODO: Create a function to add item.
    // ! Requirement: Must have:
    // !   - item text
    // !   - edit button
    // !   - delete button
    // !   - input field
    // ! Requirement: Add event listeners to buttons

    // TODO: Edit button must get pass the Parent node.

function addItem(title) {
    let newItem = document.createElement("li")
    newItem.classList.add("item")
    let newTitle = document.createElement("div")
    newTitle.textContent = title
    let editBtn = document.createElement("button")
    editBtn.classList.add("edit-button")
    editBtn.value = "edit"
    let delBtn = document.createElement("button")
    delBtn.classList.add("delete-button")
    delBtn.value = "X"
    editBtn.addEventListener('click', (e) => {
        
    });
}


// TODO: Create a function to edit item.
    // ! Requirement: Parent Node (Element) parameter

    // TODO: Remove the Edit, Delete buttons.
    // TODO: Grab text content of the div and assign to variable.
    // TODO: Add an input element to the parent node.
    // TODO: Set input's value to the variable with the text content.
    // TODO: Add the save button.

function editItem(listItem) {
    listItem.removeChild("button")
    
}

// TODO: Create a function to save item.
    // ! Requirement: Parent Node (Element) paramter
    // TODO: Get the value of the input field and assign to variable
    // TODO: Remove the input and save button.
    // TODO: Create the div, edit, and delete buttons.
    // TODO: Set the div's text content to the variable with the input's value.
    // TODO: Add all those elements to the parent element.

// TODO: Create a function to delete item.
    // ! Requirement: Parent Node (Element) paramter
    // I believe you can figure this one out yourself. <3 :) 