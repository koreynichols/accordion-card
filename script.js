document.querySelector('.question').addEventListener("click", showAnswer);
function showAnswer() {
    this.nextElementSibling.classList.remove("hidden");
}