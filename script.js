questions = document.querySelectorAll('.question')

questions.forEach(element => {
    element.addEventListener("click", toggleAnswer);
});

function toggleAnswer() {
    isHidden = checkIfHidden(this.nextElementSibling.classList);
    if(isHidden === true){
        this.nextElementSibling.classList.remove("hidden");
        this.children[0].classList.add("bold")
        return;
    }
    this.nextElementSibling.classList.add("hidden");
    this.children[0].classList.remove("bold")
}

function checkIfHidden(list_of_classes) {
    for(i=0; i<list_of_classes.length; i++){
        if(list_of_classes[i] === 'hidden')
            return true;
    }
    return false
}