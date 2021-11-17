const generateArray = function(amount) {
    let returnArray = [];

    amount = parseInt(amount);
    // console.log(amount);

    if (!Number.isNaN(amount)) {
        // console.log("Az amount egy szám.");
        for (let i = 0; i < amount; i++) { 
            returnArray.push(`${i}`);
        }
    } else {
        // console.log("Az amount nem egy szám.");
        returnArray.push("Error");
    }


    return returnArray;
}

const loadEvent = function() {
    console.log("Az oldal betöltődött");

    // console.log(generateArray("100"));
    // console.log(generateArray(15));
    // console.log(generateArray("kismalac"));
    // console.log(generateArray([2]));

    const root = document.getElementById("root");
    const list = generateArray(200);

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