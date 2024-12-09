function additem(todot, todod){
    const todo = document.getElementById("todo");
    const key = Date.now();
    localStorage.setItem(key,JSON.stringify({todot, todod}));
    todo.innerHTML += `
        <div class="todo-item">
            <div class="edit">
            <h4>${todot}</h4>
            <p>${todod}</p>
            </div>
            <button class="deleteBtn" id="btn"><img src="/TODOlist/trash.png" class="image"></button>
        </div>`;
}
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(title.value==="" || title.value=== " "){
        alert("Title can't be empty.");
        
    }
    else{
    let todot = title.value.charAt(0).toUpperCase() + title.value.slice(1);
    let todod = desc.value.charAt(0).toUpperCase() + desc.value.slice(1);
    additem(todot,todod);
    title.value="";
    desc.value="";
    console.log(todot,todod);}
})
document.getElementById("todo").addEventListener("click", function (event) {
    console.log("click");
    // Check if the clicked element or its parent has the "deleteBtn" class
    if (event.target.classList.contains("deleteBtn") || event.target.closest(".deleteBtn")) {
        // Find the closest parent element to remove (e.g., the container around the item)
        const itemToDelete = event.target.closest(".todo-item");
        console.log(itemToDelete);
        if (itemToDelete) {
            itemToDelete.remove();  // Delete the item
        }
    }
});
/*The event.target refers to the element that was directly clicked, which, in this case, would be the <img> element inside the button (not the button itself). The deleteBtn class is on the <button> element, not the <img> element. */
