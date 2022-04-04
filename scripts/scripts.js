function select(element) {
    const selected = element.parentElement.querySelector(".selected");
    const parent = element.parentElement;

    //checks whether there's a selected item in the current section.
    //if there is, unselects it and then calls the functions 'notReady()' to
    //hide the checkout button in case it's been unhidden by a previous call.
    if (selected !== null) {
        selected.classList.remove("selected");
        const checkmark = selected.querySelector("ion-icon");
        checkmark.classList.add("hidden");
        notReady();
    }

    //selects the item and then calls the function 'ready()' to check if exactly one item
    //in every section is selected. If so, shows the checkout button.
    else {
        element.classList.add("selected");
        const checkmark = element.querySelector("ion-icon");
        checkmark.classList.remove("hidden");
        ready();
    }
}

function ready() {
    mainCourse = document.querySelector(".mainCourse");
    drink = document.querySelector(".drink");
    dessert = document.querySelector(".dessert");

    if (mainCourse.querySelector(".selected")
        && drink.querySelector(".selected")
        && dessert.querySelector(".selected")) {
        document.querySelector(".mainButton").classList.add("hidden");
        document.querySelector(".checkoutButton").classList.remove("hidden");
    }
}

function notReady() {
    document.querySelector(".mainButton").classList.remove("hidden");
    document.querySelector(".checkoutButton").classList.add("hidden");
}

function toFloat(element) {
    element = element.replace(",", ".");
    return Number(element);
}

function getSelectedItem(item) {
    return document.querySelector(`${item}`).querySelector(".selected");
}

function getItemName(item) {
    return item.querySelector("h2").innerHTML;
}

function getPrice(item) {
    return toFloat(item.querySelector(".price").innerHTML);
}

function checkout() {
    let item1 = [];
    let item2 = [];
    let item3 = [];

    let total = 0;

    //The first index of every item array stores the item's HTML element;
    //The second index stores the item's name;
    //The third index stores the item's price.

    item1[0] = getSelectedItem(".mainCourse");
    item2[0] = getSelectedItem(".drink");
    item3[0] = getSelectedItem(".dessert");

    item1[1] = getItemName(item1[0]);
    item2[1] = getItemName(item2[0]);
    item3[1] = getItemName(item3[0]);

    item1[2] = getPrice(item1[0]);
    item2[2] = getPrice(item2[0]);
    item3[2] = getPrice(item3[0]);

    total = (item1[2] + item2[2] + item3[2]).toFixed(2);

    let userName = prompt("Qual é o seu nome?");
    let userAddress = prompt("Qual é o seu endereço?");

    let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${item1[1]}\n- Bebida: ${item2[1]}\n- Sobremesa: ${item3[1]}\nTotal: R$ ${total}\n\nNome: ${userName}\nEndereço: ${userAddress}`
    message = "https://wa.me/?text=" + encodeURIComponent(message);
    open(message);
}