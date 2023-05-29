const ArrayOfpawn = [];
for (const i of arrayofColumnsNames) {
    ArrayOfpawn.push(document.getElementById(i+7))
    
}

for (const i of arrayofColumnsNames) {
    ArrayOfpawn.push(document.getElementById(i+2))
    
}

for (const i of ArrayOfpawn) {
    i.addEventListener('click', ()=>{
        const currentid = i.getAttribute("id")
        console.log(currentid)
    })
    
}