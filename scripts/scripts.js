function select(element) {
    const selected = element.parentElement.querySelector(".selected");
    const parent = element.parentElement;

    if (selected !== null) {
        selected.classList.remove("selected");
        const checkmark = selected.querySelector("ion-icon");
        checkmark.classList.add("hidden");
        parent.classList.remove("check");
        notReady();
    }
    else {
        element.classList.add("selected");
        const checkmark = element.querySelector("ion-icon");
        checkmark.classList.remove("hidden");
        parent.classList.add("check");
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
        
    }
}

function notReady() {
    document.querySelector(".mainButton").classList.remove("hidden");
    document.querySelector(".checkoutButton").classList.add("hidden");
}

function checkout() {
    alert("Let's go!");
}