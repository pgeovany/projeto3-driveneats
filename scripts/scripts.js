function select(element) {
    // console.log(element);
    // element.classList.toggle("selected");
    // const checkmark = element.querySelector("ion-icon");
    // checkmark.classList.toggle("hidden");
    const selected = element.parentElement.querySelector(".selected");
    if(selected !== null) {
        selected.classList.toggle("selected");
        const checkmark = selected.querySelector("ion-icon");
        checkmark.classList.add("hidden");
    }
    else {
         element.classList.add("selected");
         const checkmark = element.querySelector("ion-icon");
         checkmark.classList.toggle("hidden");
    }
    console.log(selected);
}