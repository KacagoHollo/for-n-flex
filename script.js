const generateArray = function(amount) {
    let returnArray = [];
    
    amount = parseInt(amount);
    // console.log(amount);
    
    if (!Number.isNaN(amount)) {
        // console.log("Az amount egy szám.");
        for (let i = 0; i < amount; i++) { 
           
            if (i < 10) {
                returnArray.push(`00${i}`);
            } else if (i < 100) {
                returnArray.push(`0${i}`);
            } else {
                returnArray.push(`${i}`);
            }
        }
    }
    else {
        // console.log("Az amount nem egy szám.");
        returnArray.push("Error");
    }


    return returnArray;
}

const loadEvent = function() {
    console.log("Az oldal betöltődött");
    
    const root = document.getElementById("root");
    const list = generateArray(200);
    
    // console.log(generateArray("100"));
    // console.log(generateArray(15));
    // console.log(generateArray("kismalac"));
    // console.log(generateArray([2]));
    
    // list = new Intl.NumberFormat('en', {
    //     type: 'integer',
    //     value: '000',
    // });
    
    if (list[0] !== "Error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
        }
    }
}

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", () => {

}); 
*/