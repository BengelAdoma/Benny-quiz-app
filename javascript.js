
const bookmarkButton = document.getElementById("bookmarkButton");      

bookmarkButton.addEventListener("click", function () {
    const icon = bookmarkButton.querySelector("i");
    console.log('x');
    
        icon.classList.toggle("fa-regular"); 
        icon.classList.toggle("fa-solid"); 
   
        
});

const answerButtons = document.querySelectorAll('.submit_button');


answerButtons.forEach(button => {
    button.addEventListener('click', function () { 
        const answerParagraph = this.nextElementSibling;
        if (answerParagraph.classList.contains('hidden')) {
            answerParagraph.classList.remove('hidden');
            this.textContent = 'Hide Answer';
        } else {
            answerParagraph.classList.add('hidden');
            this.textContent = 'Show Answer';
        }
    });
});

const bodyElement = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
    bodyElement.classList.add("dark");
});

toggleButton.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});