const arrayOfCloumns  = document.querySelectorAll(".column");
const arrayofColumnsNames = ["a", "b", "c","d","e","f","g","h"];

let columnNumber = 0;
for (const i of arrayOfCloumns) {
    let row = 8;
    for (const el of i.children) {
        el.setAttribute("id" , arrayofColumnsNames[columnNumber] + row);
        row--;
        
    }
    columnNumber++;
    
}