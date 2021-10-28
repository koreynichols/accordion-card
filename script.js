questions = document.querySelectorAll('.question')

questions.forEach(element => {
    element.addEventListener("click", toggleAnswer);
});

function toggleAnswer() {
    isHidden = checkIfHidden(this.nextElementSibling.classList);
    if(isHidden === true){
        this.nextElementSibling.classList.remove("hidden");
        return;
    }
    this.nextElementSibling.classList.add("hidden");
}

function checkIfHidden(list_of_classes) {
    for(i=0; i<list_of_classes.length; i++){
        if(list_of_classes[i] === 'hidden')
            return true;
    }
    return false
}