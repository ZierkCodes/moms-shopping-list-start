// TODO: Grab the list
const shoppingList = document.getElementById("list")
// TODO: Grab the input field
const titleInput = document.getElementById("title")
// TODO: Grab the buttons.
const submitButton = document.getElementById("submit-item")
// const editButtons = document.querySelectorAll(".edit-button")
const delButtons = document.querySelectorAll(".delete-button")

// TODO: Add click event to the button.
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    addItem(titleInput.value)
    titleInput.value = ""
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
    console.log("Running addItem")
    let newItem = document.createElement("li")
    newItem.classList.add("item")

    let newTitle = document.createElement("div")
    newTitle.textContent = title

    let editBtn = document.createElement("button")
    editBtn.classList.add("edit-button")
    editBtn.innerText = "edit"

    let delBtn = document.createElement("button")
    delBtn.classList.add("delete-button")
    delBtn.innerText = "X"

    editBtn.addEventListener('click', (e) => {
        console.log("Pressed the edit button", e)
        editItem(e.target.parentElement)
    });

    newItem.appendChild(newTitle)
    newItem.appendChild(editBtn)
    newItem.appendChild(delBtn)
    shoppingList.appendChild(newItem)
};

delButtons.addEventListener('click', (e) => {
    console.log("Pressed the delete button")
    deleteItem(e.target.parentNode);
});


// TODO: Create a function to edit item.
    // ! Requirement: Parent Node (Element) parameter

    // TODO: Remove the Edit, Delete buttons.
    // TODO: Grab text content of the div and assign to variable.
    // TODO: Add an input element to the parent node.
    // TODO: Set input's value to the variable with the text content.
    // TODO: Add the save button.

function editItem(listItem) {
    let title;
    listItem.childNodes.forEach(element => {
        console.log(element.tagName)
        if(element.tagName === "DIV") {
            title = element.innerText
        }
    });

    listItem.innerHTML = ""

    let editInput = document.createElement("input")
    editInput.value = title

    let saveBtn = document.createElement("button")
    saveBtn.classList.add("save-button")
    saveBtn.innerText = "save"

    listItem.append(editInput, saveBtn)

    saveBtn.addEventListener('click', (e) => {
        saveItem(e.target.parentNode)
    });
}

// TODO: Create a function to save item.
    // ! Requirement: Parent Node (Element) parameter
    // TODO: Get the value of the input field and assign to variable
    // TODO: Remove the input and save button.
    // TODO: Create the div, edit, and delete buttons.
    // TODO: Set the div's text content to the variable with the input's value.
    // TODO: Add all those elements to the parent element.

function saveItem(listItem) {
    let titleEdit;

    listItem.childNodes.forEach(element => {
        if(element.tagName === "INPUT") {
            titleEdit = element.value
        }
    });

    listItem.innerHTML = "";

    let changedTitle = document.createElement("div");
    changedTitle.textContent = titleEdit;

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-button");
    editBtn.innerText = "edit";

    let delBtn = document.createElement("button");
    delBtn.classList.add("delete-button");
    delBtn.innerText = "X";

    listItem.appendChild(changedTitle);
    listItem.appendChild(editBtn);
    listItem.appendChild(delBtn);
}

// TODO: Create a function to delete item.
    // ! Requirement: Parent Node (Element) parameter

function deleteItem (listItem) {
    listItem.innerHTML = "";
};