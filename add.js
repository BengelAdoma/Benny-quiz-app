document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form, the questions container, and the submit button
    const form = document.getElementById('questionForm');
    const questionsContainer = document.getElementById('questionsContainer');

    // Listen for the form's submit event
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the user input values from the form
        const questionText = document.getElementById('question').value;
        const answerText = document.getElementById('answer').value;
        const tagsText = document.getElementById('tag').value;

        // Create a new question card dynamically
        const questionCard = document.createElement('article');
        questionCard.classList.add('question_card');

        // Create and add the question heading
        const questionHeading = document.createElement('h2');
        questionHeading.textContent = `Question ${questionsContainer.children.length + 1}`;

        // Create and add the question text
        const questionPara = document.createElement('p');
        questionPara.textContent = questionText;

        // Create and add the answer paragraph (initially hidden)
        const answerPara = document.createElement('p');
        answerPara.textContent = answerText;
        answerPara.classList.add('hidden');

        // Create and add the toggle button for showing/hiding the answer
        const toggleAnswerButton = document.createElement('button');
        toggleAnswerButton.textContent = 'Show Answer';
        toggleAnswerButton.setAttribute('aria-label', 'Show Answer');
        
        // Add click event to toggle the answer visibility
        toggleAnswerButton.addEventListener('click', () => {
            if (answerPara.classList.contains('hidden')) {
                answerPara.classList.remove('hidden');
                toggleAnswerButton.textContent = 'Hide Answer';
            } else {
                answerPara.classList.add('hidden');
                toggleAnswerButton.textContent = 'Show Answer';
            }
        });

        // Create and add tags to the question card
        const tagsContainer = document.createElement('div');
        const tags = tagsText.split(',').map(tag => tag.trim());
        tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.classList.add('tag');
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });

        // Append all elements to the question card
        questionCard.appendChild(questionHeading);
        questionCard.appendChild(questionPara);
        questionCard.appendChild(toggleAnswerButton);
        questionCard.appendChild(answerPara);
        questionCard.appendChild(tagsContainer);

        // Append the question card to the container
        questionsContainer.appendChild(questionCard);

        // Clear the form inputs after submission
        form.reset();
    });
});


const questionInput = document.querySelector('[data-js="questionTextarea"]');
const charactersLeftElement = document.querySelector(
    '[data-js="remaining-char"]'
);
questionInput.addEventListener("input", (event) => {
    const charsLeft = event.target.maxLength-event.target.value.length;
    charactersLeftElement.textContent = charsLeft;
});

const answerInput = document.querySelector('[data-js="answerTextarea"]');
const charLeftElement = document.querySelector(
    '[data-js="remaining-characters"]'
);
answerInput.addEventListener("input", (event) => {
    const charLeft = event.target.maxLength-event.target.value.length ;
    charLeftElement.textContent = charLeft;
});

