console.log("Hei");

// Asynkron funksjon

async function fetchData() {
    const fruitBowl = [{fruit: "Apple"}, {vegetable: "Potato"}, {berry: "Strawberry"}];
    console.log(fruitBowl);
    return fruitBowl;
}

console.log("Waiting for data");

async function reciveData() {
    try {
        const data = await fetchData();
        console.log(data);

        const response = data[0].fruit;
        console.log(response);
    } catch {
        console.log("Noe gikk galt..");
    }
}

reciveData();

//
//

async function displayData() {
    try {
        const data = [{fruit: "Apple"}, {vegetable: "Potato"}, {berry: "Strawberry"}];
        const response = data[1].vegetable;
        console.log(response);
    } catch {
        console.log("Noe gikk galt..");
    };
};

//
//

async function fetchJson() {
    const data = await fetch("data.json");
    console.log(data);
    return data;
}

async function displayJson() {
    const response = await fetchJson();
    console.log(response);

    const fruitBowl = await response.json();
    console.log(fruitBowl);

    // Loop gjennom innhold: for loop, forEach
    // HTML som tar i mot: ul, table, div
    // Retunere fruitBowl: ferdig laget html, generere html i JS, template string med innerHTML

    const displayJson = document.getElementById("displayJson");

    fruitBowl.forEach(item => {
        if (item.fruit) { // For å kun få ut et li-element
            const li = document.createElement("li");
            li.textContent = item.fruit // Resultatet synes. Mulig nettleser ikke oppdaterte seg
            displayJson.appendChild(li);
        }
    });
};

displayJson();