function select(element) {
    // console.log(element);
    // element.classList.toggle("selected");
    // const checkmark = element.querySelector("ion-icon");
    // checkmark.classList.toggle("hidden");
    const selected = element.parentElement.querySelector(".selected");
    if(selected !== null && selected !== element) {
        selected.classList.remove("selected");
        const checkmark = selected.querySelector("ion-icon");
        checkmark.classList.add("hidden");
    }
    else {
         element.classList.add("selected");
         const checkmark = element.querySelector("ion-icon");
         checkmark.classList.remove("hidden");
    }
    // price = element.querySelector(".price");
    // price = Number(price.innerHTML);
    // console.log(price);
    checkOut();
}

function checkout() {
    alert("test");
}