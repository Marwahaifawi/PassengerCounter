
let count = 0 
function increment(){
    count+=1
    document.getElementById("count-el").textContent=count
}
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let text = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent +=text
    count = 0 
    document.getElementById("count-el").textContent = count
    // NB: Make sure to not delete the existing content of the paragraph
}

