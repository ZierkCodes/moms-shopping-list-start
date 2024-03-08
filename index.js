// TODO: Grab the list
const shoppingList = document.getElementById("list")
// TODO: Grab the input field
const titleInput = document.getElementById("title")
// TODO: Grab the submit button.
const submitButton = document.getElementById("submit-item")
// TODO: Grab the empty-state p element.
const emptyMessage = document.getElementById("empty-state");

// TODO: Add click event to the button.
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    addItem(titleInput.value)
    titleInput.value = ""
});

// TODO: Create a function to add item.

function addItem(item) {
    console.log("Running addItem")
    let newItem = document.createElement("li")
    newItem.dataset.item = item;
    newItem.dataset.state = "default";
    newItem.classList.add("item");
    shoppingList.appendChild(newItem)
    renderHtml(newItem);
    manageEmptyState();
};

// TODO: Create a function to edit item.

function editItem(listItem) {
    listItem.dataset.state = "editable";
    renderHtml(listItem);
}

// TODO: Create a function to save item.

function saveItem(listItem) {
    let updatedItem = listItem.firstChild.value;
    listItem.dataset.item = updatedItem;
    listItem.dataset.state = "default";
    renderHtml(listItem)
}

// TODO: Create a function to delete item.
    // TODO: Make a way to undo the delete action for 5 seconds

function deleteItem (listItem) {
    listItem.dataset.state = "deleted"
    let timer = setTimeout(function (){
        listItem.remove();
        manageEmptyState();
    }, 5000, listItem);
    manageEmptyState();
    renderHtml(listItem, timer)
};

function manageEmptyState () {
    // TODO: Check the shoppingList state.
    // TODO: Check the empty state message.
    if(shoppingList.childElementCount > 0 && emptyMessage.style.display != "none") {
        emptyMessage.style.display = "none"
    } else if(shoppingList.childElementCount === 0 && emptyMessage.style.display === "none") {
        emptyMessage.style.display = "inline-block"
    };
};

function undoDelete (listItem) {
    //! Sets the data-state attribute to default on listItem and renders the appropriate elements
    listItem.dataset.state = "default";
    renderHtml(listItem);
};

//* This function renders HTML elements based upon the listItem's current state.
//* The function contains an array that will hold elements created by the case clauses in the switch statement.
//* listItem.replaceChildren(...children) will render the array of elements currently inside of the children array.
function renderHtml(listItem, timer) {
    let children = [];

    switch(listItem.dataset.state) {
        case "default":
            // div with title
            let title = document.createElement("div");
            title.innerText = listItem.dataset.item;
            // edit button
            let editBtn = document.createElement("button");
            editBtn.classList.add("edit-button");
            editBtn.innerText = "edit";
            //! this eventListener will switch the state of listItem to "editable"
            editBtn.addEventListener('click', (e) => {
                editItem(e.target.parentNode)
            });
            // delete button
            let delBtn = document.createElement("button");
            delBtn.classList.add("delete-button");
            delBtn.innerText = "delete";
            //! this eventListener will switch the state of listItem to "deleted"
            delBtn.addEventListener('click', (e) => {
                deleteItem(e.target.parentNode)
            });

            children.push(title, editBtn, delBtn);
            break;
        case "editable":
            // input with title
            let editInput = document.createElement("input");
            editInput.value = listItem.dataset.item;
            // save button
            let saveBtn = document.createElement("button");
            saveBtn.classList.add("save-button");
            saveBtn.innerText = "save";
            //! this eventListener will switch the state of listItem to "default"
            saveBtn.addEventListener('click', (e) => {
                saveItem(e.target.parentNode)
            });

            children.push(editInput, saveBtn)
            break;
        case "deleted":
            // confirm delete text 
            let deletedText = document.createElement("div");
            deletedText.innerText = `${listItem.dataset.item} was deleted`;
            // undo button
            let undoBtn = document.createElement("button");
            undoBtn.classList.add("undo");
            undoBtn.innerText = "undo";
            //! this eventListener will switch the state of listItem to "default"
            undoBtn.addEventListener('click', (e) => {
                //! this eventListener will also stop the timer that completely clears out the listItem
                clearTimeout(timer)
                undoDelete(e.target.parentNode.parentNode)
            });

            deletedText.append(undoBtn);
            children.push(deletedText);
            break;
    };
    listItem.replaceChildren(...children)
};