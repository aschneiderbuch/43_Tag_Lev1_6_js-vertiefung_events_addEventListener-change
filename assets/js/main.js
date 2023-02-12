console.log("test");

/* 

change 
e.target.value
addEventListener("change", (e) => {});
innerHTML oder textContent

*/

// function
// element aus liste auswählen
// dann p tag anpassen

const btnSelect = document.querySelector("#my-select");


// Szenario 1
 btnSelect.addEventListener("change", (e) =>{
    console.log(e) // inhalt des ganzen Event Objects
    console.log(e.target) // inhalt ganze select Event Objects
    console.log(e.target.value) // value von ausgewähltem  --> Select 1 ...
    let textValue = e.target.value;
    console.log(textValue);

    const textP = document.querySelector("#option-selected");
    console.log(textP);
    textP.innerHTML = `Du hast ${textValue} gewählt 🧐 sicher?`;
});


// Szenario 2
btnSelect.addEventListener("change", (e) => {
    auswahl(e);
});

function auswahl(e){



    console.log(e) // inhalt des ganzen Event Objects
    console.log(e.target) // inhalt ganze select Event Objects
    console.log(e.target.value) // value von ausgewähltem  --> Select 1 ...
    let textValue = e.target.value;
    console.log(textValue);

    const textP = document.querySelector("#option-selected");
    console.log(textP);
    textP.innerHTML = `Du hast ${textValue} gewählt 🧐 sicher?`;

}