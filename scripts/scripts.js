let items = [];

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
        parent.classList.remove("check");

        //First, the function 'toFloat' swaps the comma in the prices for a dot and converts
        //it to a number.
        //Then then function 'removeItem' checks whether the given item is already on the list
        //(in case the user selected an item and then unselected it) and if so, removes it.

        //I tried a lot of different things but ended up having to use the price as the 'unique selector'
        //for the items. I know that's a very poor choice, I'll do better next time.
        removeItem(toFloat(selected.querySelector("span").innerHTML));
        notReady();
    }

    //selects the item and then calls the function 'ready()' to check if exactly one item
    //in every section is selected. If so, shows the checkout button.
    else {
        element.classList.add("selected");
        const checkmark = element.querySelector("ion-icon");
        checkmark.classList.remove("hidden");
        parent.classList.add("check");

        items.push(toFloat(element.querySelector("span").innerHTML));
        ready();
    }
}

function ready() {
    mainCourse = document.querySelector(".mainCourse");
    drink = document.querySelector(".drink");
    dessert = document.querySelector(".dessert");

    if (mainCourse.classList.contains("check")
        && drink.classList.contains("check")
        && dessert.classList.contains("check")) {
        
        document.querySelector(".mainButton").classList.add("hidden");
        document.querySelector(".checkoutButton").classList.remove("hidden");
        console.log(items);
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

function removeItem(selected) {
    for (let i = 0; i < items.length; i++) {
        if(items[i] === selected) {
            items.splice(i, 1);
        }
    }
}

function checkout() {
    let total = 0;
    let i = 0;
    while (i < items.length) {
        total += items[i];
        i++;
    }
    total = total.toFixed(2);
    let name =  prompt("Qual é o seu nome?");
    let address = prompt("Qual é o seu endereço?");
    message = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ ${total}\n\nNome: ${name}\nEndereço: ${address}`
    message = "https://wa.me/?text=" + encodeURIComponent(message);
    open(message);
}
